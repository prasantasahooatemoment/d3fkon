
import { extendType } from '@nexus/schema'

export const addressQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.address({"filtering":true, "ordering":true, "alias":"address"})
	t.crud.addresses({"filtering":true, "ordering":true, "alias":"addresses"})
  }
})

    
