
import { objectType } from '@nexus/schema'
export const order = objectType({
    name:'order',
    definition(t){
     t.model.active()
	t.model.created_at()
	t.model.driver_id()
	t.model.id()
	t.model.otp()  //computed
	t.model.ref_no()   //computed

	t.model.shipping_cost()  //computed
	/* 
	Assume shipping is 100
	80 goes to driver
	20 goes to admin

	this is the split, the 80% has to reflect in the driver object so he can sort by earnings
	*/
	t.model.status()
	t.model.total_commission()  //computed
	t.model.user_id()
	// store, not address, please note
	t.model.store()
	t.model.store_id()
	t.model.driver()
	t.model.pickup_address_id()
	t.model.address_addressToorder_pickup_address_id({
		alias:"pickup_address"
	})
	t.model.address_addressToorder_drop_address_id({
		alias:"drop_address"
	})
	t.model.drop_address_id()
	t.model.user()
	t.model.order_products()
	t.model.transaction()
    }
  })

    
