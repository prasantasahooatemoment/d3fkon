import { rule } from 'graphql-shield'
import { Context } from '../types'

export const rules = {
  isAuthenticatedUser: rule({cache: 'no_cache'})((_parent, _args, ctx: Context) => {
    try {
      if (ctx.userId === -1) {
        throw Error("Not Authenticated");
      }
      return true
    } catch (e) {
      return e
    }
  }),
}