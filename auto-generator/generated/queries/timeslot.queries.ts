
import { extendType } from '@nexus/schema'

export const timeslotQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.timeslot({"filtering":true, "ordering":true, "alias":"timeslot"})
	t.crud.timeslots({"filtering":true, "ordering":true, "alias":"timeslots"})
  }
})

    
