
import { extendType } from '@nexus/schema'

export const storeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.store({"filtering":true, "ordering":true, "alias":"store"})
	t.crud.stores({"filtering":true, "ordering":true, "alias":"stores"})
  }
})

    
