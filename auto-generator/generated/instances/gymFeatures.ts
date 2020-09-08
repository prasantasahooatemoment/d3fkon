
import { objectType } from '@nexus/schema'
export const gymFeatures = objectType({
    name:'gym_features',
    definition(t){
     t.model.feature_id()
	t.model.gym_id()
	t.model.id()
	t.model.feature()
	t.model.gym()
    }
  })

    
