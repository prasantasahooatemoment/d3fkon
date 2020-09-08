
import { extendType } from '@nexus/schema'

export const productSizesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productSizes({"filtering":true, "ordering":true, "alias":"productSizes"})
  }
})

    
