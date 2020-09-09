import { PrismaClient } from '@prisma/client'
import { PubSub } from 'graphql-yoga'
import { Context, Token } from './types';
import { sign, verify } from 'jsonwebtoken';
import { tokens } from './utils/helpers';
import { APP_SECRET } from './constants';

const prisma = new PrismaClient()
const pubsub = new PubSub()

export const createContext = (ctx: any): Context => {
  let userId = '-1';
  try {
    let Authorization = ''
    try {
      // for queries and mutations
      Authorization = ctx.request.get('Authorization')
    } catch (e) {
      // specifically for subscriptions as the above will fail
      // Authorization = ctx?.connection?.context?.Authorization
    }
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token

    // if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name)
    //   userId = -1
    // else userId = verifiedToken.userId
  } catch (e) {
    // userId = -1
  }
  return {
    ...ctx,
    prisma,
    pubsub,
    userId,
  }
}