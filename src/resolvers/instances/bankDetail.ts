
import { objectType } from '@nexus/schema'
export const bankDetail = objectType({
    name:'bank_detail',
    definition(t){
     t.model.account_name()
	t.model.account_no()
	t.model.bank_name()
	t.model.created_at()
	t.model.driver_id()
	t.model.id()
	t.model.ifsc_code()
	t.model.store_id()
	t.model.driver()
	t.model.store()
    }
  })

    
