
import { objectType } from '@nexus/schema'
export const gymReviews = objectType({
    name:'gym_reviews',
    definition(t){
     t.model.gym_id()
	t.model.id()
	t.model.review_id()
	t.model.gym()
	t.model.review()
    }
  })

    
