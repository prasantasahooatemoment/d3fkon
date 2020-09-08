
  import { extendType } from '@nexus/schema'
  export const productMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct({"alias":"createOneproduct"})
	t.crud.updateOneproduct({"alias":"updateOneproduct"})
	t.crud.deleteOneproduct({"alias":"deleteOneproduct"})
	t.crud.upsertOneproduct({"alias":"upsertOneproduct"})
	t.crud.updateManyproduct({"alias":"updateManyproduct"})
	t.crud.deleteManyproduct({"alias":"deleteManyproduct"})
  
      }
    })
    
