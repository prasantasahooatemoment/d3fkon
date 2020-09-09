import { extendType } from '@nexus/schema'

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    // t.crud.users({ filtering: true, ordering: true, alias: 'user'})
    t.field('user', {
      type:'user',
      resolve:async (root, args, ctx, info)=>{
        return await ctx.prisma.user.findOne({
          where:{
            id:ctx.userId
          }
        })
      }
    })
    
    t.crud.users({ filtering: true, ordering: true, alias: 'fetchAllUsers' })
  },
})
