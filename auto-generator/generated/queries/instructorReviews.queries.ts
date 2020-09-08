
import { extendType } from '@nexus/schema'

export const instructorReviewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructorReviews({"filtering":true, "ordering":true, "alias":"instructorReviews"})
  }
})

    
