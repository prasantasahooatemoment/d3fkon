  import { extendType, stringArg } from '@nexus/schema'
import { generateAccessToken } from '../../utils/helpers';
import {compare} from 'bcrypt';
  export const authenticationMutation = extendType({
    type:'Mutation',
      definition(t){
        t.field('login',{
            type:'AuthPayload',
            args:{
                email: stringArg({required: true}),
                password: stringArg({required: true}),
            },
            resolve: async (_parent, {email, password}, ctx) => {
                let user = null;
                let accessToken = null;
                user = await ctx.prisma.client_user.findOne({
                  where:{
                    email
                  },
                })
                if(user){
                  
                  console.log(user);
                    const comparision = await compare(password, user.password);
                    console.log(comparision);
                    if(comparision){
                     accessToken = generateAccessToken(user.id)
                      ctx.userId = user.id;
                    }
                     else
                     throw Error("Password is invalid!")
                    }
                    else
                     throw Error("User is invalid!")
                return {user, accessToken};
            }
        });

        t.field('mobileLogin',{
          type:'MobileAuthPayload',
          args:{
              email: stringArg({required: true}),
              password: stringArg({required: true})
          },
          resolve: async (_parent, {email, password}, ctx) => {
              let user = null;
              let accessToken = null;
              user = await ctx.prisma.user.findOne({
                where:{
                  email
                },
              })
              if(user){
                  const comparision = await compare(password, user.password);
                  console.log(comparision);
                  if(comparision){
                   accessToken = generateAccessToken(user.id)
                    ctx.userId = user.id;
                  }
                   else
                   throw Error("Password is invalid!")
                  }
                  else
                   throw Error("User is invalid!")
              return {user, accessToken};
          }
      });
      }
    })
    
