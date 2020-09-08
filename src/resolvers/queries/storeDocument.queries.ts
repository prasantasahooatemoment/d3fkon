
import { extendType } from '@nexus/schema'

export const storeDocumentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.storeDocument({"filtering":true, "ordering":true, "alias":"storeDocument"})
	t.crud.storeDocuments({"filtering":true, "ordering":true, "alias":"storeDocuments"})
  }
})

    
