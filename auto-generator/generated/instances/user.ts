
import { objectType } from '@nexus/schema'
export const user = objectType({
    name:'user',
    definition(t){
     t.model.blocked()
	t.model.date_of_birth()
	t.model.email()
	t.model.first_name()
	t.model.id()
	t.model.last_name()
	t.model.mobile_no()
	t.model.booking()
	t.model.user_memberships()
	t.model.wallet()
    }
  })

    
