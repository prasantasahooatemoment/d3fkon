
import { extendType } from '@nexus/schema'

export const ticketHistoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ticketHistory({"filtering":true, "ordering":true, "alias":"ticketHistory"})
	t.crud.ticketHistories({"filtering":true, "ordering":true, "alias":"ticketHistories"})
  }
})

    
