
  import { extendType } from '@nexus/schema'
  export const storeMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnestore({"alias":"createOnestore"})
	t.crud.updateOnestore({"alias":"updateOnestore"})
	t.crud.deleteOnestore({"alias":"deleteOnestore"})
	t.crud.upsertOnestore({"alias":"upsertOnestore"})
	t.crud.updateManystore({"alias":"updateManystore"})
	t.crud.deleteManystore({"alias":"deleteManystore"})
  
      }
    })
    
