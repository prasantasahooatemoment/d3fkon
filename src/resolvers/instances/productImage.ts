
import { objectType } from '@nexus/schema'
export const productImage = objectType({
    name:'product_image',
    definition(t){
     t.model.created_at()
	t.model.id()
	t.model.image_url()
	t.model.product_id()
	t.model.product()
    }
  })

    
