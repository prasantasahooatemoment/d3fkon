
import { objectType } from '@nexus/schema'
export const ticket = objectType({
    name:'ticket',
    definition(t){
     t.model.created_at()
	t.model.driver_id()
	t.model.id()
	t.model.name()
	t.model.open()
	t.model.store_id()
	t.model.type()
	t.model.user_id()
	t.model.driver()
	t.model.store()
	t.model.user()
	t.model.ticket_history()
    }
  })

    
