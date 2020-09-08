
import { extendType } from '@nexus/schema'

export const ticketQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ticket({"filtering":true, "ordering":true, "alias":"ticket"})
	t.crud.tickets({"filtering":true, "ordering":true, "alias":"tickets"})
  }
})

    
