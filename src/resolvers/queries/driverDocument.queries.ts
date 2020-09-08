
import { extendType } from '@nexus/schema'

export const driverDocumentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.driverDocument({"filtering":true, "ordering":true, "alias":"driverDocument"})
	t.crud.driverDocuments({"filtering":true, "ordering":true, "alias":"driverDocuments"})
  }
})

    
