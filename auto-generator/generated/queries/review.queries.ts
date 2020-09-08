
import { extendType } from '@nexus/schema'

export const reviewQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.review({"filtering":true, "ordering":true, "alias":"review"})
	t.crud.reviews({"filtering":true, "ordering":true, "alias":"reviews"})
  }
})

    
