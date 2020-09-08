
import { extendType } from '@nexus/schema'

export const instructorTimeslotsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructorTimeslots({"filtering":true, "ordering":true, "alias":"instructorTimeslots"})
  }
})

    
