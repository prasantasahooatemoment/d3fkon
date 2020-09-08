
import { extendType } from '@nexus/schema'

export const instructorFeaturesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructorFeatures({"filtering":true, "ordering":true, "alias":"instructorFeatures"})
  }
})

    
