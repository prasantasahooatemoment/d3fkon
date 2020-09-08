
import { extendType } from '@nexus/schema'

export const driverQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.driver({"filtering":true, "ordering":true, "alias":"driver"})
	t.crud.drivers({"filtering":true, "ordering":true, "alias":"drivers"})
  }
})

    
