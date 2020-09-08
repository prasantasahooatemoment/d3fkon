
import { objectType } from '@nexus/schema'
export const gymClass = objectType({
    name:'gym_class',
    definition(t){
     t.model.feature_id()
	t.model.gym_id()
	t.model.id()
	t.model.instructor_id()
	t.model.profile_id()
	t.model.time()
	t.model.title()
	t.model.venue_id()
	t.model.feature()
	t.model.gym()
	t.model.instructor()
	t.model.class_profile()
	t.model.venue()
    }
  })

    
