
  import { extendType } from '@nexus/schema'
  export const walletTransactionMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnewallet_transaction({"alias":"createOnewalletTransaction"})
	t.crud.updateOnewallet_transaction({"alias":"updateOnewalletTransaction"})
	t.crud.deleteOnewallet_transaction({"alias":"deleteOnewalletTransaction"})
	t.crud.upsertOnewallet_transaction({"alias":"upsertOnewalletTransaction"})
	t.crud.updateManywallet_transaction({"alias":"updateManywalletTransaction"})
	t.crud.deleteManywallet_transaction({"alias":"deleteManywalletTransaction"})
  
      }
    })
    
