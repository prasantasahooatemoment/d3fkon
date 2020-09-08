
import { objectType } from '@nexus/schema'
export const ticketHistory = objectType({
    name:'ticket_history',
    definition(t){
     t.model.admin()
	t.model.created_at()
	t.model.id()
	t.model.message()
	t.model.ticket_id()
	t.model.ticket()
    }
  })

    
