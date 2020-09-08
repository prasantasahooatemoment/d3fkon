
import { objectType } from '@nexus/schema'
export const instructorFeatures = objectType({
    name:'instructor_features',
    definition(t){
     t.model.feature_id()
	t.model.id()
	t.model.instructor_id()
	t.model.feature()
	t.model.instructor()
    }
  })

    
