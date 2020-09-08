
  import { extendType } from '@nexus/schema'
  export const transactionMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnetransaction({"alias":"createOnetransaction"})
	t.crud.updateOnetransaction({"alias":"updateOnetransaction"})
	t.crud.deleteOnetransaction({"alias":"deleteOnetransaction"})
	t.crud.upsertOnetransaction({"alias":"upsertOnetransaction"})
	t.crud.updateManytransaction({"alias":"updateManytransaction"})
	t.crud.deleteManytransaction({"alias":"deleteManytransaction"})
  
      }
    })
    
