
  import { extendType } from '@nexus/schema'
  export const sizeMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnesize({"alias":"createOnesize"})
	t.crud.updateOnesize({"alias":"updateOnesize"})
	t.crud.deleteOnesize({"alias":"deleteOnesize"})
	t.crud.upsertOnesize({"alias":"upsertOnesize"})
	t.crud.updateManysize({"alias":"updateManysize"})
	t.crud.deleteManysize({"alias":"deleteManysize"})
  
      }
    })
    
