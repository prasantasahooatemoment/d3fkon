
import { objectType } from '@nexus/schema'
export const instructorReviews = objectType({
    name:'instructor_reviews',
    definition(t){
     t.model.id()
	t.model.instructor_id()
	t.model.review_id()
	t.model.instructor()
	t.model.review()
    }
  })

    
