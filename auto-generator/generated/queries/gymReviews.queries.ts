
import { extendType } from '@nexus/schema'

export const gymReviewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymReviews({"filtering":true, "ordering":true, "alias":"gymReviews"})
  }
})

    
