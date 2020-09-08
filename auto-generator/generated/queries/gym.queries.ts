
import { extendType } from '@nexus/schema'

export const gymQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gym({"filtering":true, "ordering":true, "alias":"gym"})
	t.crud.gyms({"filtering":true, "ordering":true, "alias":"gyms"})
  }
})

    
