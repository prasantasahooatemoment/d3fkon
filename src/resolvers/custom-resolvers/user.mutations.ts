import { extendType, stringArg, floatArg } from '@nexus/schema'
import { hash, compare } from 'bcrypt'
import * as AWS from 'aws-sdk/clients/s3'
import { Upload } from './upload'
import { genders } from '@prisma/client'
export const userMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser({
      alias: 'mobileSignup',
      computedInputs: {
        ref_code: ({ ctx }) =>
          Math.random().toString(36).substr(2, 6).toUpperCase(),
      },
      async resolve(root, args, ctx, info, original) {
        let walletAmount = 0
        args.data.password = await hash(args.data.password, 10)
        const settings = await ctx.prisma.global_settings.findOne({
          where:{
            id:1
          }
        })
        settings?.free_boolean ? args.data.free_classes_avail = settings.free_classes : '';
        const result = await original(root, args, ctx, info)
        if (args.data.ref_by) {
          const user = await ctx.prisma.user.findMany({
            where: {
              ref_code: {
                equals: args.data.ref_by.toUpperCase(),
              },
            },
          })
          if (user.length > 0) {
            const refferedUser = user[0]
            const settings = await ctx.prisma.global_settings.findOne({
              where: {
                id: 1,
              },
            })
            if (settings?.ref_boolean) {
              walletAmount = settings?.ref_credits
              let wallet = await ctx.prisma.user.findOne({
                where: {
                  id: refferedUser.id,
                },
                include: {
                  wallet: true,
                },
              })
              wallet = wallet?.wallet[0]
              const amount = Number(wallet?.amount)
              const updated = await ctx.prisma.wallet.update({
                where: {
                  id: wallet?.id,
                },
                data: {
                  amount: Number(Number(amount) + Number(walletAmount)),
                },
              })
              if (updated) {
                const transaction = await ctx.prisma.wallet_transaction.create(
                  {
                    data: {
                      amount: walletAmount,
                      date: new Date().toISOString(),
                      status: 'finshed',
                      type: 'referral',
                      wallet: {
                        connect: {
                          id: wallet?.id,
                        },
                      },
                    },
                  },
                )
              }
            }
          }
        }
        const wallet = await ctx.prisma.wallet
          .create({
            data: {
              amount: walletAmount,
              user: {
                connect: {
                  id: await result.id,
                },
              },
            },
          })
            const transaction = await ctx.prisma.wallet_transaction.create(
              {
                data: {
                  amount: walletAmount,
                  date: new Date().toISOString(),
                  status: 'finshed',
                  type: 'referral',
                  wallet: {
                    connect: {
                      id: wallet.id,
                    },
                  },
                },
              },
            )
        console.log(await result.id)
        return result
      },
    })

    t.field('profileUpdate', {
      type: 'user',
      args: {
        email: stringArg(),
        firstName: stringArg(),
        lastName: stringArg(),
        dob: stringArg({
          required: false,
        }),
        phoneNumber: stringArg(),
        gender: 'genders',
        image: Upload,
      },
      resolve: async (root, args, ctx, info) => {
        if (args.image) {
          const awsClient = new AWS({
            accessKeyId: 'SCW5KR0FDKYQEJ9P31T2',
            secretAccessKey: 'a461d08a-a096-4bf8-b2c9-538a8c626416',
            region: 'fr-par',
            endpoint: 'https://s3.fr-par.scw.cloud',
          })
          const image = await args.image
          await awsClient
            .upload({
              Bucket: 'boilerplate-bucket',
              Key: image.filename,
              ContentLength: image.size,
              Body: image.createReadStream(),
              ACL: 'public-read',
            })
            .promise()
            const user = await ctx.prisma.user.update({
              data: {
                date_of_birth: new Date(args.dob).toISOString(),
                email: args.email,
                first_name: args.firstName,
                last_name: args.lastName,
                gender: args.gender,
                mobile_no: Number(args.phoneNumber),
                image_url: `https://boilerplate-bucket.s3.fr-par.scw.cloud/${image.filename}`,
              },
              where: {
                id: ctx.userId,
              },
            })
            return user
            
        } else {
          const user = await ctx.prisma.user.update({
            data: {
              date_of_birth: new Date(args.dob).toISOString(),
              email: args.email,
              first_name: args.firstName,
              last_name: args.lastName,
              gender: args.gender,
              mobile_no: Number(args.phoneNumber),
            },
            where: {
              id: ctx.userId,
            },
          })
          return user
        }
      },
    })

    t.field('changePassword', {
      args: {
        currentPassword: stringArg({
          required: true,
        }),
        newPassword: stringArg({
          required: true,
        }),
      },
      type: 'user',
      resolve: async (root, args, ctx, info) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            id: ctx.userId,
          },
        })
        const comparision = await compare(
          args.currentPassword,
          user?.password || '',
        )
        if (!comparision) {
          throw new Error('Invalid password, please try again.')
        }
        if (args.newPassword == args.currentPassword) {
          throw new Error('Same passwords entered, please try again')
        } else {
          args.newPassword = await hash(args.newPassword, 10)
          await ctx.prisma.user.update({
            data: {
              password: args.newPassword,
            },
            where: {
              id: ctx.userId,
            },
          })
          return user
        }
      },
    })
  },
})
