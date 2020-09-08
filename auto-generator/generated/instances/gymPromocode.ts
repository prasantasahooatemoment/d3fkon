
import { objectType } from '@nexus/schema'
export const gymPromocode = objectType({
    name:'gym_promocode',
    definition(t){
     t.model.code()
	t.model.discount_percentage()
	t.model.gym_id()
	t.model.id()
	t.model.title()
	t.model.validity()
	t.model.gym()
    }
  })

    
