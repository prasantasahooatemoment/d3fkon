
  import { extendType } from '@nexus/schema'
  export const productImageMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_image({"alias":"createOneproductImage"})
	t.crud.updateOneproduct_image({"alias":"updateOneproductImage"})
	t.crud.deleteOneproduct_image({"alias":"deleteOneproductImage"})
	t.crud.upsertOneproduct_image({"alias":"upsertOneproductImage"})
	t.crud.updateManyproduct_image({"alias":"updateManyproductImage"})
	t.crud.deleteManyproduct_image({"alias":"deleteManyproductImage"})
  
      }
    })
    
