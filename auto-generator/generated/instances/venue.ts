
import { objectType } from '@nexus/schema'
export const venue = objectType({
    name:'venue',
    definition(t){
     t.model.address()
	t.model.id()
	t.model.lat()
	t.model.lng()
	t.model.name()
	t.model.gym()
	t.model.gym_class()
	t.model.instructor_venues()
    }
  })

    
