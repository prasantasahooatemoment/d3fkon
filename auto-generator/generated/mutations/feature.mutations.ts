
  import { extendType } from '@nexus/schema'
  export const featureMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnefeature({"alias":"createOnefeature"})
	t.crud.updateOnefeature({"alias":"updateOnefeature"})
	t.crud.deleteOnefeature({"alias":"deleteOnefeature"})
	t.crud.upsertOnefeature({"alias":"upsertOnefeature"})
	t.crud.updateManyfeature({"alias":"updateManyfeature"})
	t.crud.deleteManyfeature({"alias":"deleteManyfeature"})
  
      }
    })
    
