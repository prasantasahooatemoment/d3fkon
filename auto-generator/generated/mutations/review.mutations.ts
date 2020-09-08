
  import { extendType } from '@nexus/schema'
  export const reviewMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnereview({"alias":"createOnereview"})
	t.crud.updateOnereview({"alias":"updateOnereview"})
	t.crud.deleteOnereview({"alias":"deleteOnereview"})
	t.crud.upsertOnereview({"alias":"upsertOnereview"})
	t.crud.updateManyreview({"alias":"updateManyreview"})
	t.crud.deleteManyreview({"alias":"deleteManyreview"})
  
      }
    })
    
