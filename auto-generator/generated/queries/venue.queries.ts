
import { extendType } from '@nexus/schema'

export const venueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.venue({"filtering":true, "ordering":true, "alias":"venue"})
	t.crud.venues({"filtering":true, "ordering":true, "alias":"venues"})
  }
})

    
