
import { objectType } from '@nexus/schema'
export const gymMembership = objectType({
    name:'gym_membership',
    definition(t){
     t.model.cost()
	t.model.gym_id()
	t.model.id()
	t.model.title()
	t.model.uses()
	t.model.validity()
	t.model.gym()
    }
  })

    
