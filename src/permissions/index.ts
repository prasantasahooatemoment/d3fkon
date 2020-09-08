import { shield, allow, not, deny } from 'graphql-shield'
import { rules } from './rules'

export const permissions = shield({
  Query: {
    '*':allow
  },
  Mutation:{
    // login: allow,
    // mobileLogin:allow,
    // createOneclientUser: allow,
    // mobileSignup: allow,
    '*': allow
  },
  // Mutation: allow,
},{
debug:true,
allowExternalErrors:true
})
