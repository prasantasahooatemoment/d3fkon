
  import { extendType } from '@nexus/schema'
  export const driverMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnedriver({"alias":"createOnedriver"})
	t.crud.updateOnedriver({"alias":"updateOnedriver"})
	t.crud.deleteOnedriver({"alias":"deleteOnedriver"})
	t.crud.upsertOnedriver({"alias":"upsertOnedriver"})
	t.crud.updateManydriver({"alias":"updateManydriver"})
	t.crud.deleteManydriver({"alias":"deleteManydriver"})
  
      }
    })
    
