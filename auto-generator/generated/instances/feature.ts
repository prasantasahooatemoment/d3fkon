
import { objectType } from '@nexus/schema'
export const feature = objectType({
    name:'feature',
    definition(t){
     t.model.feature_name()
	t.model.feature_type()
	t.model.id()
	t.model.gym_class()
	t.model.gym_features()
	t.model.instructor_features()
    }
  })

    
