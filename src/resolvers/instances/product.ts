
import { objectType } from '@nexus/schema'
export const product = objectType({
    name:'product',
    definition(t){
     t.model.active()
	t.model.cost_price()
	t.model.created_at()
	t.model.description()
	t.model.discounted_price()
	t.model.id()
	t.model.name()
	t.model.offer()
	t.model.selling_price()
	t.model.store_id()
	t.model.store()
	t.model.order_products()
	t.model.product_image()
	t.model.product_sizes()
	t.model.rating()
    }
  })

    
