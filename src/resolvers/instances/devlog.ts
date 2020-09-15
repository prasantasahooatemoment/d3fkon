
import { objectType } from '@nexus/schema'
export const devlog = objectType({
    name:'devlog',
    definition(t){
     t.model.id()
	t.model.sent_object()
    }
  })

    
