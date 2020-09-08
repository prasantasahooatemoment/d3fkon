
import { objectType } from '@nexus/schema'
export const instructor = objectType({
    name:'instructor',
    definition(t){
     t.model.first_name()
	t.model.gym_id()
	t.model.id()
	t.model.image_url()
	t.model.last_name()
	t.model.price_hour()
	t.model.status()
	t.model.gym()
	t.model.gym_class()
	t.model.instructor_features()
	t.model.instructor_package()
	t.model.instructor_reviews()
	t.model.instructor_timeslots()
	t.model.instructor_venues()
    }
  })

    
