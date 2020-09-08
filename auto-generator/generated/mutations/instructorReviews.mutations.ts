
  import { extendType } from '@nexus/schema'
  export const instructorReviewsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor_reviews({"alias":"createOneinstructorReviews"})
	t.crud.updateOneinstructor_reviews({"alias":"updateOneinstructorReviews"})
	t.crud.deleteOneinstructor_reviews({"alias":"deleteOneinstructorReviews"})
	t.crud.upsertOneinstructor_reviews({"alias":"upsertOneinstructorReviews"})
	t.crud.updateManyinstructor_reviews({"alias":"updateManyinstructorReviews"})
	t.crud.deleteManyinstructor_reviews({"alias":"deleteManyinstructorReviews"})
  
      }
    })
    
