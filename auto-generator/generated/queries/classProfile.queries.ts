
import { extendType } from '@nexus/schema'

export const classProfileQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classProfile({"filtering":true, "ordering":true, "alias":"classProfile"})
	t.crud.classProfiles({"filtering":true, "ordering":true, "alias":"classProfiles"})
  }
})

    
