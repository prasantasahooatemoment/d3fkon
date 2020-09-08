
import { objectType } from '@nexus/schema'
export const driver = objectType({
    name:'driver',
    definition(t){
     t.model.address_id()
	t.model.created_at()
	t.model.id()
	t.model.mobile()
	t.model.address()
	t.model.bank_detail()
	t.model.driver_document()
	t.model.order()
	t.model.ticket()
    }
  })

    
