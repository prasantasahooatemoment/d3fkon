
import { objectType } from '@nexus/schema'
export const instructorTimeslots = objectType({
    name:'instructor_timeslots',
    definition(t){
     t.model.id()
	t.model.instructor_id()
	t.model.timeslot_id()
	t.model.instructor()
	t.model.timeslot()
	t.model.booking()
    }
  })

    
