
  import { extendType } from '@nexus/schema'
  export const userMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneuser({"alias":"createOneuser"})
	t.crud.updateOneuser({"alias":"updateOneuser"})
	t.crud.deleteOneuser({"alias":"deleteOneuser"})
	t.crud.upsertOneuser({"alias":"upsertOneuser"})
	t.crud.updateManyuser({"alias":"updateManyuser"})
	t.crud.deleteManyuser({"alias":"deleteManyuser"})
  
      }
    })
    
