
  import { extendType } from '@nexus/schema'
  export const ratingMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnerating({"alias":"createOnerating"})
	t.crud.updateOnerating({"alias":"updateOnerating"})
	t.crud.deleteOnerating({"alias":"deleteOnerating"})
	t.crud.upsertOnerating({"alias":"upsertOnerating"})
	t.crud.updateManyrating({"alias":"updateManyrating"})
	t.crud.deleteManyrating({"alias":"deleteManyrating"})
  
      }
    })
    
