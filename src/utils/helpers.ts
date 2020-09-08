import { sign } from "jsonwebtoken"
import { tokens, APP_SECRET, AUTH_MSG91, OTP_MSG, SENDER_ID } from "../constants"
var SendOtp = require('sendotp')

export const generateAccessToken = (userId: number) => {
    const accessToken = sign(
      {
        userId,
        type: tokens.access.name,
        timestamp: Date.now(),
      },
      APP_SECRET,
      {
        expiresIn: tokens.access.expiry,
      }
    )
    return accessToken
  }
 
  export const sendOtp = async (number: number) => {
    const sendotp = new SendOtp(AUTH_MSG91, OTP_MSG);
   return new Promise((resolve,reject)=>{
    sendotp.send(number, SENDER_ID, function (err: any, data: { type: string }) {
      if(err || data.type!='success') reject(data.type)
      resolve(data.type)
    })
  })
    
  }

  export const verifyOtp = async (number: number, otp: number) => {
    const sendotp = new SendOtp(AUTH_MSG91, OTP_MSG);
   return new Promise((resolve,reject)=>{
    sendotp.verify(number, otp, function (err: any, data: { type: string }) {
      if(err || data.type!='success') reject(Error("Invalid OTP"))
      resolve(data.type)
    })
  })
  }