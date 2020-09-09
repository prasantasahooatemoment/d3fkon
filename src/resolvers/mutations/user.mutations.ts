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
      alias: 'updateOneuser',
      computedInputs: { where: ({ctx, args}) => ({
        user:{
          id:ctx.userId
        }
      }) },
    })
    t.crud.deleteOneuser({ alias: 'deleteOneuser' })
    t.crud.upsertOneuser({ alias: 'upsertOneuser' })
    t.crud.updateManyuser({ alias: 'updateManyuser' })
    t.crud.deleteManyuser({ alias: 'deleteManyuser' })
  },
})
