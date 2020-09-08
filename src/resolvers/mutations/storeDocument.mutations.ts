
  import { extendType } from '@nexus/schema'
  export const storeDocumentMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnestore_document({"alias":"createOnestoreDocument"})
	t.crud.updateOnestore_document({"alias":"updateOnestoreDocument"})
	t.crud.deleteOnestore_document({"alias":"deleteOnestoreDocument"})
	t.crud.upsertOnestore_document({"alias":"upsertOnestoreDocument"})
	t.crud.updateManystore_document({"alias":"updateManystoreDocument"})
	t.crud.deleteManystore_document({"alias":"deleteManystoreDocument"})
  
      }
    })
    
