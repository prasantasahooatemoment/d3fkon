
import { extendType } from '@nexus/schema'

export const gymClassQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymClass({"filtering":true, "ordering":true, "alias":"gymClass"})
	t.crud.gymClasses({"filtering":true, "ordering":true, "alias":"gymClasses"})
  }
})

    
