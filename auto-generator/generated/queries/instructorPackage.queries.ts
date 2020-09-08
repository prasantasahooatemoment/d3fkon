
import { extendType } from '@nexus/schema'

export const instructorPackageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructorPackage({"filtering":true, "ordering":true, "alias":"instructorPackage"})
	t.crud.instructorPackages({"filtering":true, "ordering":true, "alias":"instructorPackages"})
  }
})

    
