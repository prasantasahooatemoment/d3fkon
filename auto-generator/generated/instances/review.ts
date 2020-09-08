
import { objectType } from '@nexus/schema'
export const review = objectType({
    name:'review',
    definition(t){
     t.model.description()
	t.model.id()
	t.model.is_abuse()
	t.model.op_reply()
	t.model.rating()
	t.model.booking()
	t.model.gym_reviews()
	t.model.instructor_reviews()
    }
  })

    
