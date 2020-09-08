import { extendType, intArg, floatArg, stringArg } from '@nexus/schema'
export const bookingMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('bookClass', {
      type: 'bookClass',
      args: {
        classId: intArg({
          required: true,
        }),
        promocode: stringArg({
          nullable: true,
        }),
        userId: intArg({
          nullable: true,
        }),
      },
      resolve: async (root, args, context, info) => {
        const localUserId = args.userId || context.userId
        const user = await context.prisma.user.findOne({
          where: {
            id: localUserId,
          },
          include: {
            wallet: true,
          },
        })
        const amount = user?.wallet[0].amount || 0
        const gymClass = await context.prisma.gym_class.findOne({
          where: {
            id: args.classId,
          },
          include: {
            class_profile: true,
            instructor: {
              include: {
                timeslot: true,
              },
            },
          },
        })
        const classPrice = gymClass?.class_profile?.class_price || 0
        const classCapacity =
          gymClass?.class_profile?.class_capacity || Infinity
        const bookingCount = await context.prisma.booking.count({
          where: {
            class_id: args.classId,
          },
        })

        const isAlreadyBooked = await context.prisma.booking.count({
          where: {
            AND: [
              {
                class_id: gymClass?.id,
              },
              {
                user_id: localUserId,
              },
            ],
          },
        })

        if (isAlreadyBooked > 0) {
          throw new Error('Already booked')
        }

        if (new Date(gymClass?.time).getTime() < new Date().getTime()) {
          throw new Error('Unable to book this class.')
        }
        if (bookingCount >= classCapacity) {
          throw new Error('The class is full')
        }

        const classTime = new Date(gymClass?.time)
        const timeslots = gymClass?.instructor?.timeslot.map((e) => {
          const timeslotTime = new Date(e.start_time)
          if (!timeslotTime) {
            return
          }
          const endTime = new Date(
            timeslotTime.getTime() + 60000 * (e.duration || 60),
          )
          if (
            classTime?.getTime() >= timeslotTime?.getTime() &&
            classTime?.getTime() <= endTime.getTime()
          ) {
            e.booked = true
          }
          return e
        })
        if (timeslots && timeslots.length > 0) {
          timeslots.map(async (timeslot) => {
            const instructor = await context.prisma.instructor.update({
              data: {
                timeslot: {
                  update: {
                    data: {
                      booked: true,
                    },
                    where: {
                      id: timeslot.id,
                    },
                  },
                },
              },
              where: {
                id: gymClass?.instructor_id,
              },
            })
          })
        }
        
        let calculatedPrice = classPrice
        if(user?.free_classes_avail > 0){
          let calculatedPrice = 0;
        }
        let parsedAmt = amount - calculatedPrice
        if (args.promocode && user?.free_classes_avail <= 0) {
          const promoCode = await context.prisma.gym_promocode
            .findOne({
              where: {
                code: args.promocode,
              },
            })
            .catch((e) => {
              throw Error(e)
            })
          if (
            new Date().getTime() < promoCode?.validity?.getTime() &&
            promoCode?.gym_id == gymClass?.gym_id
          ) {
            parsedAmt *= 1 + promoCode?.discount_percentage / 100
            calculatedPrice *= 1 + promoCode?.discount_percentage / 100
          } else {
            throw Error('Promocode not valid')
          }
        }
        if (parsedAmt < 0) {
          throw new Error('Not enough credits in wallet')
        }
        const updatedWallet = await context.prisma.wallet.update({
          data: {
            amount: parsedAmt,
          },
          where: {
            id: user?.wallet[0].id,
          },
        })
        const booking = await context.prisma.booking.create({
          data: {
            user: {
              connect: {
                id: user?.id,
              },
            },
            booked_at: new Date().toISOString(),
            type: 'class',

            gym_class: {
              connect: {
                id: args.classId,
              },
            },
          },
        })
        if(user?.free_classes_avail > 0 && parsedAmt == 0){const updateUser = await context.prisma.user.update({
          where:{
            id:user?.id
          },
          data:{
            free_classes_avail: user?.free_classes_avail - 1
          }
        })}
        const updatedTx = await context.prisma.wallet_transaction.create({
          data: {
            amount: calculatedPrice,
            type: 'withdrawal',
            status: 'finshed',
            date: new Date().toISOString(),
            wallet: {
              connect: {
                id: user?.wallet[0].id,
              },
            },
            booking: {
              connect: {
                id: booking.id,
              },
            },
          },
        })
        return { id: booking.id, class: gymClass }
        // if(!timeslots || timeslots.length < 0){
        //     throw new Error("No instructor or timeslots found")
        // }
      },
    })

    t.field('bookPackage', {
      type: 'bookPackage',
      args: {
        packageId: intArg({
          required: true,
        }),
        promocode: stringArg({
          nullable: true,
        }),
        userId: intArg({
          nullable: true,
        }),
      },
      resolve: async (root, args, context, info) => {
        const localUserId = args.userId || context.userId
        const user = await context.prisma.user.findOne({
          where: {
            id: localUserId,
          },
          include: {
            wallet: true,
          },
        })

        const amount = user?.wallet[0].amount || 0
        const gymPackage = await context.prisma.gym_package.findOne({
          where: {
            id: args.packageId,
          },
          include: {
            gym: true,
            booking: true,
          },
        })

        const isAlreadyBooked = await context.prisma.booking.count({
          where: {
            AND: [
              {
                gym_package_id: gymPackage?.id,
              },
              {
                user_id: localUserId,
              },
            ],
          },
        })

        if (isAlreadyBooked > 0) {
          throw new Error('Already booked')
        }

        const classPrice = gymPackage?.cost || 0
        let calculatedPrice = classPrice
        let parsedAmt = amount - calculatedPrice
        if (args.promocode) {
          const promoCode = await context.prisma.gym_promocode
            .findOne({
              where: {
                code: args.promocode,
              },
            })
            .catch((e) => {
              throw Error(e)
            })
          if (
            new Date().getTime() < promoCode?.validity?.getTime() &&
            promoCode?.gym_id == gymPackage?.gym_id
          ) {
            parsedAmt *= 1 + promoCode?.discount_percentage / 100
            calculatedPrice *= 1 + promoCode?.discount_percentage / 100
          } else {
            throw Error('Promocode not valid')
          }
        }

        if (parsedAmt < 0) {
          throw new Error('Not enough credits in wallet')
        }

        const updatedWallet = await context.prisma.wallet.update({
          data: {
            amount: parsedAmt,
          },
          where: {
            id: user?.wallet[0].id,
          },
        })

        const booking = await context.prisma.booking.create({
          data: {
            user: {
              connect: {
                id: user?.id,
              },
            },
            booked_at: new Date().toISOString(),
            type: 'package',
            // (timeslotTime).getTime() + 60000 * (e.duration || 60),
            validity: new Date(
              new Date().setDate(
                new Date().getDate() + (gymPackage?.duration || 30),
              ),
            ).toISOString(),
            gym_package: {
              connect: {
                id: args.packageId,
              },
            },
          },
        })
        const updatedTx = await context.prisma.wallet_transaction.create({
          data: {
            amount: calculatedPrice,
            type: 'withdrawal',
            status: 'finshed',
            date: new Date().toISOString(),
            wallet: {
              connect: {
                id: user?.wallet[0].id,
              },
            },
            booking: {
              connect: {
                id: booking.id,
              },
            },
          },
        })

        return { id: booking.id, package: gymPackage }
      },
    })

    t.field('bookInstructorPackage', {
      type: 'bookInstructorPackage',
      args: {
        packageId: intArg({
          required: true,
        }),
  
        userId: intArg({
          nullable: true,
        }),
      },
      resolve: async (root, args, context, info) => {
        const localUserId = args.userId || context.userId
        const user = await context.prisma.user.findOne({
          where: {
            id: localUserId,
          },
          include: {
            wallet: true,
          },
        })

        const amount = user?.wallet[0].amount || 0
        const instructorPackage = await context.prisma.instructor_package.findOne(
          {
            where: {
              id: args.packageId,
            },
            include: {
              instructor: true,
              booking: true,
            },
          },
        )

        const isAlreadyBooked = await context.prisma.booking.count({
          where: {
            AND: [
              {
                instructor_package: {
                  id: instructorPackage?.id,
                },
              },
              {
                user_id: localUserId,
              },
            ],
          },
        })

        if (isAlreadyBooked > 0) {
          throw new Error('Already booked')
        }

        const classPrice = instructorPackage?.cost || 0
        let calculatedPrice = classPrice
        let parsedAmt = amount - calculatedPrice

        if (parsedAmt < 0) {
          throw new Error('Not enough credits in wallet')
        }

        const updatedWallet = await context.prisma.wallet.update({
          data: {
            amount: parsedAmt,
          },
          where: {
            id: user?.wallet[0].id,
          },
        })

        const booking = await context.prisma.booking.create({
          data: {
            user: {
              connect: {
                id: user?.id,
              },
            },
            booked_at: new Date().toISOString(),
            type: 'instructor_package',
            // (timeslotTime).getTime() + 60000 * (e.duration || 60),
            validity: new Date(
              new Date().setDate(
                new Date().getDate() + (instructorPackage?.duration || 30),
              ),
            ).toISOString(),
            instructor_package: {
              connect: {
                id: args.packageId,
              },
            },
          },
        })
        const updatedTx = await context.prisma.wallet_transaction.create({
          data: {
            amount: calculatedPrice,
            type: 'withdrawal',
            status: 'finshed',
            date: new Date().toISOString(),
            wallet: {
              connect: {
                id: user?.wallet[0].id,
              },
            },
            booking: {
              connect: {
                id: booking.id,
              },
            },
          },
        })

        return { id: booking.id, package: instructorPackage }
      },
    })

    t.field('bookMembership', {
      type: 'bookMembership',
      args: {
        membershipId: intArg({
          required: true,
        }),
        promocode: stringArg({
          nullable: true,
        }),
        userId: intArg({
          nullable: true,
        }),
      },
      resolve: async (root, args, context, info) => {
        const localUserId = args.userId || context.userId
        const user = await context.prisma.user.findOne({
          where: {
            id: localUserId,
          },
          include: {
            wallet: true,
          },
        })

        const amount = user?.wallet[0].amount || 0
        const gymMembership = await context.prisma.gym_membership.findOne({
          where: {
            id: args.membershipId,
          },
          include: {
            gym: true,
            booking: true,
          },
        })

        const isAlreadyBooked = await context.prisma.booking.count({
          where: {
            AND: [
              {
                gym_membership: {
                  id: gymMembership?.id,
                },
              },
              {
                user_id: localUserId,
              },
            ],
          },
        })

        if (isAlreadyBooked > 0) {
          throw new Error('Already booked')
        }

        const classPrice = gymMembership?.cost || 0
        let calculatedPrice = classPrice
        let parsedAmt = amount - calculatedPrice
        if (args.promocode) {
          const promoCode = await context.prisma.gym_promocode
            .findOne({
              where: {
                code: args.promocode,
              },
            })
            .catch((e) => {
              throw Error(e)
            })
          if (
            new Date().getTime() < promoCode?.validity?.getTime() &&
            promoCode?.gym_id == gymMembership?.gym_id
          ) {
            parsedAmt *= 1 + promoCode?.discount_percentage / 100
            calculatedPrice *= 1 + promoCode?.discount_percentage / 100
          } else {
            throw Error('Promocode not valid')
          }
        }

        if (parsedAmt < 0) {
          throw new Error('Not enough credits in wallet')
        }

        const updatedWallet = await context.prisma.wallet.update({
          data: {
            amount: parsedAmt,
          },
          where: {
            id: user?.wallet[0].id,
          },
        })

        const booking = await context.prisma.booking.create({
          data: {
            user: {
              connect: {
                id: user?.id,
              },
            },
            booked_at: new Date().toISOString(),
            validity: new Date(
              new Date().setDate(
                new Date().getDate() + (gymMembership?.duration || 30),
              ),
            ).toISOString(),
            type: 'membership',
            gym_membership: {
              connect: {
                id: args.membershipId,
              },
            },
          },
        })
        const updatedTx = await context.prisma.wallet_transaction.create({
          data: {
            amount: calculatedPrice,
            type: 'withdrawal',
            status: 'finshed',
            date: new Date().toISOString(),
            wallet: {
              connect: {
                id: user?.wallet[0].id,
              },
            },
            booking: {
              connect: {
                id: booking.id,
              },
            },
          },
        })
        return { id: booking.id, membership: gymMembership }
      },
    })
  },
})
