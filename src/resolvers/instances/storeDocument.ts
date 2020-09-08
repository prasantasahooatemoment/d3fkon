
import { objectType } from '@nexus/schema'
export const storeDocument = objectType({
    name:'store_document',
    definition(t){
     t.model.created_at()
	t.model.id()
	t.model.store_id()
	t.model.url()
	t.model.store()
    }
  })

    
