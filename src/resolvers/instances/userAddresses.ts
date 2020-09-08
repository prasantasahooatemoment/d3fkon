
import { objectType } from '@nexus/schema'
export const userAddresses = objectType({
    name:'user_addresses',
    definition(t){
     t.model.address_id()
	t.model.id()
	t.model.user_id()
	t.model.address()
	t.model.user()
    }
  })

    
