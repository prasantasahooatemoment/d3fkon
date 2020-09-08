
  import { extendType } from '@nexus/schema'
  export const userAddressesMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneuser_addresses({"alias":"createOneuserAddresses"})
	t.crud.updateOneuser_addresses({"alias":"updateOneuserAddresses"})
	t.crud.deleteOneuser_addresses({"alias":"deleteOneuserAddresses"})
	t.crud.upsertOneuser_addresses({"alias":"upsertOneuserAddresses"})
	t.crud.updateManyuser_addresses({"alias":"updateManyuserAddresses"})
	t.crud.deleteManyuser_addresses({"alias":"deleteManyuserAddresses"})
  
      }
    })
    
