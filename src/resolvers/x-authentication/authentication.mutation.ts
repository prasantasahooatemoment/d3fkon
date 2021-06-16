import { extendType, stringArg, floatArg } from '@nexus/schema'
import { generateAccessToken, verifyOtp } from '../../utils/helpers'
import { compare } from 'bcrypt'
export const authenticationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login',{
        type:'store',
        args:{
            number: stringArg({required: true}),
            password: stringArg({required: true}),
        },
        resolve: async (_parent, {number, password}, ctx) => {
            let user = null;
            user = await ctx.prisma.store.findMany({
              where:{
                address:{
                  mobile:{equals:Number(number)}
                }
              },
            })
            if(user.length > 0){
              console.log(user);
                const comparision = password == ("zard@shop123");
                console.log(comparision);
                if(comparision){
                  return user[0]
                }
                 else
                 throw Error("Password is invalid!")
                }
                else
                 throw Error("User is invalid!")
        }
    });

    t.field('mobileLogin', {
      type: 'MobileAuthPayload',
      args: {
        mobile: floatArg({ required: true }),
        otp: floatArg({ required: true }),
      },
      resolve: async (_parent, { mobile, otp }, ctx) => {
        let user = null
        let accessToken = null
        user = await ctx.prisma.user.findOne({
          where: {
            mobile,
          },
        })
        if (user) {
          // const verified = await verifyOtp(mobile, otp);
          const verified = true
          if (verified) {
            accessToken = generateAccessToken(user.id)
            ctx.userId = user.id
          }
          // const comparision = await compare(password, user.password);
          // console.log(comparision);
          // if(comparision){
          //  accessToken = generateAccessToken(user.id)
          //   ctx.userId = user.id;
          // }
          //  else
          //  throw Error("Password is invalid!")
        } else throw Error('User is invalid!')
        return { user, accessToken }
      },
    })

    t.field('driverLogin', {
      type: 'DriverAuthPayload',
      args: {
        mobile: floatArg({ required: true }),
        otp: floatArg({ required: true }),
      },
      resolve: async (_parent, { mobile, otp }, ctx) => {
        let user = null
        let accessToken = null
        user = await ctx.prisma.driver.findOne({
          where: {
            mobile,
          },
        })
        if (user) {
          // const verified = await verifyOtp(mobile, otp);
          const verified = true
          if (verified) {
            accessToken = generateAccessToken(user.id)
            ctx.userId = user.id
          }
          // const comparision = await compare(password, user.password);
          // console.log(comparision);
          // if(comparision){
          //  accessToken = generateAccessToken(user.id)
          //   ctx.userId = user.id;
          // }
          //  else
          //  throw Error("Password is invalid!")
        } else throw Error('User is invalid!')
        return { user, accessToken }
      },
    })
  },
})
