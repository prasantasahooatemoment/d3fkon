
import { extendType } from '@nexus/schema'

export const devlogQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.devlog({"filtering":true, "ordering":true, "alias":"devlog"})
	t.crud.devlogs({"filtering":true, "ordering":true, "alias":"devlogs"})
  }
})

    
