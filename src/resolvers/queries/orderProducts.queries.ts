
import { extendType } from '@nexus/schema'

export const orderProductsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orderProducts({"filtering":true, "ordering":true, "alias":"orderProducts"})
  }
})

    
