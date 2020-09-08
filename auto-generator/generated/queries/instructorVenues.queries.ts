
import { extendType } from '@nexus/schema'

export const instructorVenuesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructorVenues({"filtering":true, "ordering":true, "alias":"instructorVenues"})
  }
})

    
