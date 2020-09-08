
import { objectType } from '@nexus/schema'
export const userMemberships = objectType({
    name:'user_memberships',
    definition(t){
     t.model.gym_membership_id()
	t.model.id()
	t.model.user_id()
	t.model.gym()
	t.model.user()
    }
  })

    
