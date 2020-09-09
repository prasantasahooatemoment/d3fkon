
import { extendType } from '@nexus/schema'

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user({"filtering":true, "ordering":true, "alias":"user", computedInputs: {
      where: ({args, ctx})=> ({user: {id: ctx.userId}})
    }})
	t.crud.users({"filtering":true, "ordering":true, "alias":"users"})
  }
})

    
