
import { extendType } from '@nexus/schema'

export const productImageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productImage({"filtering":true, "ordering":true, "alias":"productImage"})
	t.crud.productImages({"filtering":true, "ordering":true, "alias":"productImages"})
  }
})

    
