
import { objectType } from '@nexus/schema'
export const timeslot = objectType({
    name:'timeslot',
    definition(t){
     t.model.duration()
	t.model.id()
	t.model.name()
	t.model.start_time()
	t.model.instructor_timeslots()
    }
  })

    
