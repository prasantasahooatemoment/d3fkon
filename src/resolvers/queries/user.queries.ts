import { extendType } from '@nexus/schema'

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user({ filtering: true, ordering: true, alias: 'user', resolve: async(root, args, ctx, info, original) => {
      args.where = {id: ctx.userId};
      return original(root, args, ctx, info)
    }})
    t.crud.users({ filtering: true, ordering: true, alias: 'users' })
  },
})
