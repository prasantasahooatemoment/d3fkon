
  import { extendType } from '@nexus/schema'
  export const ticketHistoryMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneticket_history({"alias":"createOneticketHistory"})
	t.crud.updateOneticket_history({"alias":"updateOneticketHistory"})
	t.crud.deleteOneticket_history({"alias":"deleteOneticketHistory"})
	t.crud.upsertOneticket_history({"alias":"upsertOneticketHistory"})
	t.crud.updateManyticket_history({"alias":"updateManyticketHistory"})
	t.crud.deleteManyticket_history({"alias":"deleteManyticketHistory"})
  
      }
    })
    
