
  import { extendType } from '@nexus/schema'
  export const instructorFeaturesMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor_features({"alias":"createOneinstructorFeatures"})
	t.crud.updateOneinstructor_features({"alias":"updateOneinstructorFeatures"})
	t.crud.deleteOneinstructor_features({"alias":"deleteOneinstructorFeatures"})
	t.crud.upsertOneinstructor_features({"alias":"upsertOneinstructorFeatures"})
	t.crud.updateManyinstructor_features({"alias":"updateManyinstructorFeatures"})
	t.crud.deleteManyinstructor_features({"alias":"deleteManyinstructorFeatures"})
  
      }
    })
    
