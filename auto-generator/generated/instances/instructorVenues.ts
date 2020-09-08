
import { objectType } from '@nexus/schema'
export const instructorVenues = objectType({
    name:'instructor_venues',
    definition(t){
     t.model.id()
	t.model.instructor_id()
	t.model.venue_id()
	t.model.instructor()
	t.model.venue()
    }
  })

    
