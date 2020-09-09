import { extendType } from '@nexus/schema'
import { truncate } from 'fs'
export const userMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser({
      alias: 'createOneuser',
      computedInputs: { active: () => true },
    })
    
    t.crud.updateOneuser({
      resolve:async(root, args, ctx, info, original)=>{
        args.where.id = ctx.userId;
        return original(root, args, ctx, info)
      }
    })
    // t.pr
    t.crud.deleteOneuser({ alias: 'deleteOneuser' })
    t.crud.upsertOneuser({ alias: 'upsertOneuser' })
    t.crud.updateManyuser({ alias: 'updateManyuser' })
    t.crud.deleteManyuser({ alias: 'deleteManyuser' })
  },
})
