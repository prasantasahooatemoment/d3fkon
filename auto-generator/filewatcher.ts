import { NexusPrismaOutputs } from 'typegen-nexus-plugin-prisma'
import { keys } from 'ts-transformer-keys'
import * as fs from 'fs'
import * as path from 'path'
import * as _ from 'lodash';
import { mutationTemplate } from './mutation.template'
import { queryTemplate } from './query.template'
import { instanceTemplate } from './instance.template'
import { indexTemplate } from './index.template'
import { split } from 'lodash';
import { dir } from 'console';


// npx ts-node --compiler ttypescript --project tsconfig.local.json filewatcher.ts 


const baseFilePath = 'generated/'

function generateAllFiles(){
  const dirs = ['instances','queries','mutations','subscriptions'] 

  dirs.map((dir)=>{
    if(!fs.existsSync(path.join(__dirname, baseFilePath, dir))){
      fs.mkdirSync(path.join(__dirname, baseFilePath, dir));
    }
  })

  generateMutationFiles();
  generateInstanceFiles();
  generateQueryFiles();
}

generateAllFiles();

function generateInstanceFiles(){
const instances = rawGenInstances();
let instancePaths = [];
const instanceConsts: string[] = [];
for(let instance in instances){
  const models = instances[instance].modelLines.join('\n\t');
  const dataToWrite = instanceTemplate.replace('$instanceName',`${snakeToCamel(instance)}`).replace('$instanceType',"'"+`${instance}`+"'").replace('$models',models);
  instancePaths.push(`./${snakeToCamel(instance)}`);
  instanceConsts.push(snakeToCamel(instance));
  fs.writeFile(
    path.join(__dirname, baseFilePath, `instances/${snakeToCamel(instance)}.ts`),
    dataToWrite,
    (error: any) => {
      if(error){
        throw error;
      }
    }
  )
}
instancePaths = instancePaths.map((e,i)=>`import * as ${instanceConsts[i]} from '${e}';`)
const spreadImports = instanceConsts.map((e,i)=>(`...${e},`));
const indexToWrite = indexTemplate.replace('$imports',instancePaths.join('\n')).replace('$constName','Instances').replace('$spreadImportConsts', spreadImports.join('\n'));

fs.writeFile(
  path.join(__dirname, baseFilePath, `instances/index.ts`),
  indexToWrite,
  (error: any) => {
    if(error) throw error;
  }
)

}

function generateMutationFiles(){
const mutations = generateMutations()
let instancePaths = [];
const instanceConsts: string[] = [];
for (var mutation in mutations) {
  const cruds = mutations[mutation].crudLines.join('\n\t');
  const dataToWrite = mutationTemplate.replace('$mutationName', `${snakeToCamel(mutation)}Mutations`).replace('$cruds',cruds);
  instancePaths.push(`./${snakeToCamel(mutation)}.mutations`);
  instanceConsts.push(`${snakeToCamel(mutation)}Mutations`);
  fs.writeFile(
    path.join(__dirname, baseFilePath, `mutations/${snakeToCamel(mutation)}.mutations.ts`),
    dataToWrite,
    (error: any) => {
      if (error) {
        throw error
      }
    },
  )
}

instancePaths = instancePaths.map((e,i)=>`import * as ${instanceConsts[i]} from '${e}';`)
const spreadImports = instanceConsts.map((e,i)=>(`...${e},`));
const indexToWrite = indexTemplate.replace('$imports',instancePaths.join('\n')).replace('$constName','Mutations').replace('$spreadImportConsts', spreadImports.join('\n'));

fs.writeFile(
  path.join(__dirname, baseFilePath, `mutations/index.ts`),
  indexToWrite,
  (error: any) => {
    if(error) throw error;
  }
)


}

function generateQueryFiles(){
  const queries = generateQueries()
  let instancePaths = [];
const instanceConsts: string[] = [];
for (var query in queries) {
  const cruds = queries[query].crudLines.join('\n\t');
  const dataToWrite = queryTemplate.replace('$queryName', `${snakeToCamel(query)}Query`).replace('$cruds',cruds);
  instancePaths.push(`./${snakeToCamel(query)}.queries`);
  instanceConsts.push(`${snakeToCamel(query)}Query`);
  fs.writeFile(
    path.join(__dirname, baseFilePath, `queries/${snakeToCamel(query)}.queries.ts`),
    dataToWrite,
    (error: any) => {
      if (error) {
        throw error
      }
    },
  )
}

instancePaths = instancePaths.map((e,i)=>`import * as ${instanceConsts[i]} from '${e}';`)
const spreadImports = instanceConsts.map((e,i)=>(`...${e},`));
const indexToWrite = indexTemplate.replace('$imports',instancePaths.join('\n')).replace('$constName','Queries').replace('$spreadImportConsts', spreadImports.join('\n'));

fs.writeFile(
  path.join(__dirname, baseFilePath, `queries/index.ts`),
  indexToWrite,
  (error: any) => {
    if(error) throw error;
  }
)
}

function generateMutations() {
  const a = keys<NexusPrismaOutputs['Mutation']>('test')
  return rawGenCrud(a, false)
}

function generateQueries() {
  const a = keys<NexusPrismaOutputs['Query']>('test')
  return rawGenCrud(a, true)
}

function rawGenCrud(a: any, isQuery: boolean) {
  let command = ''
  let parentObj = {}
  let parentSet = new Set<string>()
  let batchPayloadCruds: string[] = []
  const crudLineTemplate = isQuery ? `t.crud.$command({"filtering":true, "ordering":true, "alias":"$alias"})` : `t.crud.$command({"alias":"$alias"})`;

  for (let i of a) {
    command = i.split('|')[0]
    let type = i.split('|')[1]
    if (type == 'BatchPayload') {
      batchPayloadCruds.push(crudLineTemplate.replace('$command', command).replace('$alias',_.camelCase(command)));
      continue
    }
    if (!parentSet.has(type)) {
      parentObj[type] = {}
      parentObj[type].crudLines = []
      parentSet.add(type)
    }
    parentObj[type].type = type
    parentObj[type].crudLines.push(
      crudLineTemplate.replace('$command', command).replace('$alias',_.camelCase(command)),
    )
  }

  Array.from(parentSet).map((crud) => {
    const regex = new RegExp(crud + '\\(')
    const matchedCruds = batchPayloadCruds.filter((e) => regex.test(e))
    parentObj[crud].crudLines = parentObj[crud].crudLines.concat(matchedCruds)
  })

  return parentObj
}


function rawGenInstances() {
  let a = keys<NexusPrismaOutputs>()
  a.splice(0,2);
  const modelLineTemplate = `t.model.$type()`
  let parentObj = {};
  for(let element of a){
    let splitElement = element.split('|');
    let thisEle = splitElement.shift();
    splitElement = splitElement.map(e=>modelLineTemplate.replace('$type',e));
  parentObj[thisEle!] = {};
  parentObj[thisEle!].type = thisEle!;
  parentObj[thisEle!].modelLines = [];
  parentObj[thisEle!].modelLines = parentObj[thisEle!].modelLines.concat(splitElement);    
  }

  return parentObj;

}



function snakeToCamel(str: any){
  return str.toLowerCase().replace(/([-_][a-z])/g, (group: any) =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  )
};

