
import { objectType } from '@nexus/schema'
export const gym = objectType({
    name:'gym',
    definition(t){
     t.model.id()
	t.model.image_url()
	t.model.name()
	t.model.status()
	t.model.timing()
	t.model.venue_id()
	t.model.venue()
	t.model.gym_class()
	t.model.gym_features()
	t.model.gym_membership()
	t.model.gym_package()
	t.model.gym_promocode()
	t.model.gym_reviews()
	t.model.instructor()
	t.model.user_memberships()
    }
  })

    
