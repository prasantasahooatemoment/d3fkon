import { PrismaClient } from '@prisma/client'
import { PubSub } from 'graphql-yoga'
import { Request, Response } from 'express'
// import { IncomingMessage } from 'http'

export interface Context {
  prisma: PrismaClient
  req: Request
  res: Response
  pubsub: PubSub
  userId: number
}

export interface Token {
  userId: number
  type: string
  timestamp: number
}