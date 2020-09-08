
import { extendType } from '@nexus/schema'

export const userAddressesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.userAddresses({"filtering":true, "ordering":true, "alias":"userAddresses"})
  }
})

    
