
import { extendType } from '@nexus/schema'

export const orderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.order({"filtering":true, "ordering":true, "alias":"order"})
	t.crud.orders({"filtering":true, "ordering":true, "alias":"orders"})
  }
})

    
