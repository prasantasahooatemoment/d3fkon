
import { extendType } from '@nexus/schema'

export const gymPackageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymPackage({"filtering":true, "ordering":true, "alias":"gymPackage"})
	t.crud.gymPackages({"filtering":true, "ordering":true, "alias":"gymPackages"})
  }
})

    
