
  import { extendType } from '@nexus/schema'
  export const productSizesMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_sizes({"alias":"createOneproductSizes"})
	t.crud.updateOneproduct_sizes({"alias":"updateOneproductSizes"})
	t.crud.deleteOneproduct_sizes({"alias":"deleteOneproductSizes"})
	t.crud.upsertOneproduct_sizes({"alias":"upsertOneproductSizes"})
	t.crud.updateManyproduct_sizes({"alias":"updateManyproductSizes"})
	t.crud.deleteManyproduct_sizes({"alias":"deleteManyproductSizes"})
  
      }
    })
    
