
import { extendType } from '@nexus/schema'

export const gymMembershipQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymMembership({"filtering":true, "ordering":true, "alias":"gymMembership"})
	t.crud.gymMemberships({"filtering":true, "ordering":true, "alias":"gymMemberships"})
  }
})

    
