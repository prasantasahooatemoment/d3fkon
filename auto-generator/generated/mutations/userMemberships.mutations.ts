
  import { extendType } from '@nexus/schema'
  export const userMembershipsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneuser_memberships({"alias":"createOneuserMemberships"})
	t.crud.updateOneuser_memberships({"alias":"updateOneuserMemberships"})
	t.crud.deleteOneuser_memberships({"alias":"deleteOneuserMemberships"})
	t.crud.upsertOneuser_memberships({"alias":"upsertOneuserMemberships"})
	t.crud.updateManyuser_memberships({"alias":"updateManyuserMemberships"})
	t.crud.deleteManyuser_memberships({"alias":"deleteManyuserMemberships"})
  
      }
    })
    
