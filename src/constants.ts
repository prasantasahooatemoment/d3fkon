export const tokens = {
    access: {
      name: 'ACCESS_TOKEN',
      expiry: '1y',
    },
  }
  
  export const APP_SECRET = process.env.APP_SECRET || "APP_SECRET"
    
  export const isDev = () => process.env.NODE_ENV === 'development'

  export const AUTH_MSG91 = "317023AICUGKSTxh5e3c0553P1"
  export const OTP_MSG = "Your OTP for Socialite is {{otp}}. This is valid for the next 15 minutes and can only be used once. \n\n Discover your new Hautr self!"
  export const SENDER_ID = "SOCIALITE"
