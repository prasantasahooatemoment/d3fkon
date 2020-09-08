
import { extendType } from '@nexus/schema'

export const instructorQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructor({"filtering":true, "ordering":true, "alias":"instructor"})
	t.crud.instructors({"filtering":true, "ordering":true, "alias":"instructors"})
  }
})

    
