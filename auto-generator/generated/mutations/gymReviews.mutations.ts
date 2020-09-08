
  import { extendType } from '@nexus/schema'
  export const gymReviewsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_reviews({"alias":"createOnegymReviews"})
	t.crud.updateOnegym_reviews({"alias":"updateOnegymReviews"})
	t.crud.deleteOnegym_reviews({"alias":"deleteOnegymReviews"})
	t.crud.upsertOnegym_reviews({"alias":"upsertOnegymReviews"})
	t.crud.updateManygym_reviews({"alias":"updateManygymReviews"})
	t.crud.deleteManygym_reviews({"alias":"deleteManygymReviews"})
  
      }
    })
    
