
  import { extendType } from '@nexus/schema'
  export const gymMembershipMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_membership({"alias":"createOnegymMembership"})
	t.crud.updateOnegym_membership({"alias":"updateOnegymMembership"})
	t.crud.deleteOnegym_membership({"alias":"deleteOnegymMembership"})
	t.crud.upsertOnegym_membership({"alias":"upsertOnegymMembership"})
	t.crud.updateManygym_membership({"alias":"updateManygymMembership"})
	t.crud.deleteManygym_membership({"alias":"deleteManygymMembership"})
  
      }
    })
    
