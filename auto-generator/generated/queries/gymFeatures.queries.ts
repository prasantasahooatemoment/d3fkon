
import { extendType } from '@nexus/schema'

export const gymFeaturesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymFeatures({"filtering":true, "ordering":true, "alias":"gymFeatures"})
  }
})

    
