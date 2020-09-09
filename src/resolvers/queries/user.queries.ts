import { extendType } from '@nexus/schema'

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.users({ filtering: true, ordering: true, alias: 'user',computedInputs:{
      where: ({args, ctx, info})=> ({
        id:{equals:ctx.userId}
      })
    } })
    t.crud.users({ filtering: true, ordering: true, alias: 'fetchAllUsers' })
  },
})
