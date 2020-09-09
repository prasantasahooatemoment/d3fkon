import { extendType, stringArg, floatArg, intArg } from '@nexus/schema'
import { AUTH_MSG91, OTP_MSG, SENDER_ID } from '../../constants'
import { verifyOtp, sendOtp } from '../../utils/helpers'
var SendOtp = require('sendotp')

export const otpMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('sendOTP', {
      type: 'OTP',
      args: {
        mobile: floatArg({
          required: true,
        }),
      },
      resolve: (ctx, args, info) => {
        const sent = sendOtp(args.mobile);
        return {status: sent}
      },
    })

    t.field('verifyOTP', {
      type: 'OTP',
      args: {
        mobile: floatArg({
          required: true,
        }),
        otp: intArg({
          required: true,
        }),
      },
      resolve: async (ctx, args, info) => {
            const verification = verifyOtp(args.mobile, args.otp)
          return { status: verification }
      },
    })
  },
})
