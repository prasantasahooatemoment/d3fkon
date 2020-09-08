
  import { extendType } from '@nexus/schema'
  export const driverDocumentMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnedriver_document({"alias":"createOnedriverDocument"})
	t.crud.updateOnedriver_document({"alias":"updateOnedriverDocument"})
	t.crud.deleteOnedriver_document({"alias":"deleteOnedriverDocument"})
	t.crud.upsertOnedriver_document({"alias":"upsertOnedriverDocument"})
	t.crud.updateManydriver_document({"alias":"updateManydriverDocument"})
	t.crud.deleteManydriver_document({"alias":"deleteManydriverDocument"})
  
      }
    })
    
