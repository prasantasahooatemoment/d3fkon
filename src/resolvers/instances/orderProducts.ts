
import { objectType } from '@nexus/schema'
export const orderProducts = objectType({
    name:'order_products',
    definition(t){
     t.model.created_at()
	t.model.discounted_price()
	t.model.id()
	t.model.order_id()
	t.model.product_id()
	t.model.quantity()
	//size is missing
	t.model.size()
	t.model.selling_price()
	t.model.updated_at()
	t.model.order()
	t.model.product()
    }
  })

    
