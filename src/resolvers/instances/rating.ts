
import { objectType } from '@nexus/schema'
export const rating = objectType({
    name:'rating',
    definition(t){
     t.model.created_at()
	t.model.id()
	t.model.product_id()
	t.model.rating()
	t.model.user_id()
	t.model.product()
	t.model.user()
    }
  })

    
