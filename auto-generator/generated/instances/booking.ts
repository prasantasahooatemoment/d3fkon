
import { objectType } from '@nexus/schema'
export const booking = objectType({
    name:'booking',
    definition(t){
     t.model.id()
	t.model.instructor_timeslots_id()
	t.model.review_id()
	t.model.transaction_id()
	t.model.type()
	t.model.user_id()
	t.model.instructor_timeslots()
	t.model.review()
	t.model.wallet_transaction()
	t.model.user()
    }
  })

    
