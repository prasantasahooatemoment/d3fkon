
import { extendType } from '@nexus/schema'

export const ratingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rating({"filtering":true, "ordering":true, "alias":"rating"})
	t.crud.ratings({"filtering":true, "ordering":true, "alias":"ratings"})
  }
})

    
