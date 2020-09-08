
  import { extendType } from '@nexus/schema'
  export const addressMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneaddress({"alias":"createOneaddress"})
	t.crud.updateOneaddress({"alias":"updateOneaddress"})
	t.crud.deleteOneaddress({"alias":"deleteOneaddress"})
	t.crud.upsertOneaddress({"alias":"upsertOneaddress"})
	t.crud.updateManyaddress({"alias":"updateManyaddress"})
	t.crud.deleteManyaddress({"alias":"deleteManyaddress"})
  
      }
    })
    
