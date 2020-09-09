import { extendType } from '@nexus/schema'
export const ticketMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneticket({
      alias: 'createOneticket',
    })
    t.crud.updateOneticket({ alias: 'updateOneticket' })
    t.crud.deleteOneticket({ alias: 'deleteOneticket' })
    t.crud.upsertOneticket({ alias: 'upsertOneticket' })
    t.crud.updateManyticket({ alias: 'updateManyticket' })
    t.crud.deleteManyticket({ alias: 'deleteManyticket' })
  },
})
