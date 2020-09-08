import { extendType } from '@nexus/schema'

export const bookingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookings({
      alias: 'pastBookings',
      pagination: true,
      filtering: true,
      ordering: true,

      async resolve(root, args, ctx, info, original) {
        if (!args.where) {
          args.where = {}
        }
        args.where.user_id = { equals: ctx.userId }
        args.where.OR = [
          {
            gym_class: {
              time: {
                lt: new Date().toISOString(),
              },
            },
          },
          {
            validity: {
              lt: new Date().toISOString(),
            },
          },
        ]

        return original(root, args, ctx, info)
      },
    })

    t.crud.bookings({
      alias: 'upcomingBookings',
      pagination: true,
      filtering: true,
      ordering: true,

      async resolve(root, args, ctx, info, original) {
        if (!args.where) {
          args.where = {}
        }
        args.where.user_id = { equals: ctx.userId }
        args.where.OR = [
          {
            gym_class: {
              time: {
                gt: new Date().toISOString(),
              },
            },
          },
          {
            validity: {
              gt: new Date().toISOString(),
            },
          },
        ]
        return original(root, args, ctx, info)
      },
    })
  },
})
