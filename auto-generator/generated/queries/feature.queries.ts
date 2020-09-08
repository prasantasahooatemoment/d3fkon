
import { extendType } from '@nexus/schema'

export const featureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.feature({"filtering":true, "ordering":true, "alias":"feature"})
	t.crud.features({"filtering":true, "ordering":true, "alias":"features"})
  }
})

    
