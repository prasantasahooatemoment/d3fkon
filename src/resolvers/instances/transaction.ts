
import { objectType } from '@nexus/schema'
export const transaction = objectType({
    name:'transaction',
    definition(t){
     t.model.amount()
	t.model.created_at()
	t.model.id()
	t.model.order_id()
	t.model.tax()
	t.model.ref_no()
	t.model.user_id()
	t.model.order()
	t.model.user()
	//computed query for 1 days total earnings for driver
    }
  })

    
