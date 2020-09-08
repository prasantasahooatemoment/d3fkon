
import { objectType } from '@nexus/schema'
export const instructorPackage = objectType({
    name:'instructor_package',
    definition(t){
     t.model.cost()
	t.model.id()
	t.model.instructor_id()
	t.model.title()
	t.model.uses()
	t.model.validity()
	t.model.instructor()
    }
  })

    
