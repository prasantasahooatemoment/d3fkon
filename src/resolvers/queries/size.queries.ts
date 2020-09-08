
import { extendType } from '@nexus/schema'

export const sizeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.size({"filtering":true, "ordering":true, "alias":"size"})
	t.crud.sizes({"filtering":true, "ordering":true, "alias":"sizes"})
  }
})

    
