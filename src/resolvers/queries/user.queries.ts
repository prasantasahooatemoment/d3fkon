
import { extendType } from '@nexus/schema'

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user({"filtering":true, "ordering":true, "alias":"user"})
	t.crud.users({"filtering":true, "ordering":true, "alias":"users"})
  }
})

    
