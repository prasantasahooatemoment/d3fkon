
import { extendType } from '@nexus/schema'

export const userMembershipsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.userMemberships({"filtering":true, "ordering":true, "alias":"userMemberships"})
  }
})

    
