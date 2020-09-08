
import { objectType } from '@nexus/schema'
export const size = objectType({
    name:'size',
    definition(t){
     t.model.created_at()
	t.model.id()
	t.model.name()
	t.model.product_sizes()
    }
  })

    
