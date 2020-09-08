
import { objectType } from '@nexus/schema'
export const address = objectType({
    name:'address',
    definition(t){
     t.model.city()
	t.model.country()
	t.model.created_at()
	t.model.id()
	t.model.lat()
	t.model.lng()
	t.model.mobile()
	t.model.name()
	t.model.pincode()
	t.model.region()
	t.model.street_one()
	t.model.street_two()
	t.model.driver()
	t.model.store()
	t.model.user_addresses()
    }
  })

    
