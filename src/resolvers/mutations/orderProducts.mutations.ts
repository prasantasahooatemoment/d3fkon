
  import { extendType } from '@nexus/schema'
  export const orderProductsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneorder_products({"alias":"createOneorderProducts"})
	t.crud.updateOneorder_products({"alias":"updateOneorderProducts"})
	t.crud.deleteOneorder_products({"alias":"deleteOneorderProducts"})
	t.crud.upsertOneorder_products({"alias":"upsertOneorderProducts"})
	t.crud.updateManyorder_products({"alias":"updateManyorderProducts"})
	t.crud.deleteManyorder_products({"alias":"deleteManyorderProducts"})
  
      }
    })
    
