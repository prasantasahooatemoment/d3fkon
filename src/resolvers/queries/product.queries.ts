
import { extendType } from '@nexus/schema'

export const productQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.product({"filtering":true, "ordering":true, "alias":"product"})
	t.crud.products({"filtering":true, "ordering":true, "alias":"products"})
  }
})

    
