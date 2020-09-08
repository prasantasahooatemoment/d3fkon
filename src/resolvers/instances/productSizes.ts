
import { objectType } from '@nexus/schema'
export const productSizes = objectType({
    name:'product_sizes',
    definition(t){
     t.model.created_at()
	t.model.id()
	t.model.product_id()
	t.model.size_id()
	t.model.product()
	t.model.size()
    }
  })

    
