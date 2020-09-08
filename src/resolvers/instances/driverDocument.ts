
import { objectType } from '@nexus/schema'
export const driverDocument = objectType({
    name:'driver_document',
    definition(t){
     t.model.created_at()
	t.model.driver_id()
	t.model.id()
	t.model.type()
	t.model.url()
	t.model.driver()
    }
  })

    
