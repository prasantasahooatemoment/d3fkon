import { config } from 'dotenv'
config()
import { GraphQLServer, Options } from 'graphql-yoga'
import { schema } from './schema'
import {applyMiddleware} from 'graphql-middleware'
import { createContext } from './context'
import { permissions } from './permissions'
import { APP_SECRET } from './constants'

const opts = {
  host:'192.168.0.102',
  port:4002,
  cors:{
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
  }
}
new GraphQLServer({  schema: applyMiddleware(schema, permissions), context: createContext }).start(opts, () =>{
  console.log(
    `Pokemon being served at: http://localhost:4002\n⭐️`,
  )
}
)
