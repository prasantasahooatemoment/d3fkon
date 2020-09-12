import { objectType } from '@nexus/schema'
export const ticket = objectType({
  name: 'ticket',
  definition(t) {
    t.model.created_at()
    t.field('from', {
      type: 'String',
      async resolve(root, args, ctx, info) {
        const type = root.type
        switch (type) {
          case 'driver':
            const driver = await ctx.prisma.driver.findOne({
              where: {
                id: root.driver_id,
              },
            })
            return 'Driver - ' + driver?.name + ', ' + driver?.mobile
          case 'user':
            const user = await ctx.prisma.user.findOne({
              where: {
                id: root.user_id,
              },
            })
            return 'Customer - ' + user?.name + ', ' + user?.mobile
          case 'store':
            const store = await ctx.prisma.store.findOne({
              where: {
                id: root.store_id,
              },
              include: {
                address: true,
              },
            })
            return 'Store - ' + store?.name + ', ' + store?.address?.mobile

          default:
            break
        }
      },
    })
    t.field('updatedAt', {
      type: 'DateTime',
      async resolve(root, args, ctx, info) {
        const messages = await ctx.prisma.ticket_history.findMany({
          where: {
            ticket_id: root.id,
          },
          orderBy: {
            created_at: 'desc',
          },
          take: 1,
        })
        return messages[0].created_at
      },
    })
    t.model.driver_id()
    t.model.id()
    t.model.name({
      alias: 'subject',
    })
    t.field('description', {
      type: 'String',
      async resolve(root, args, ctx, info) {
        const messages = await ctx.prisma.ticket_history.findMany({
          where: {
            ticket_id: root.id,
          },
          orderBy: {
            created_at: 'asc',
          },
          take: 1,
        })
        return messages[0].message
      },
    })
    t.model.open()
    t.model.store_id()
    t.model.type()
    t.model.user_id()
    t.model.driver()
    t.model.store()
    t.model.user()
    t.model.ticket_history()
  },
})
