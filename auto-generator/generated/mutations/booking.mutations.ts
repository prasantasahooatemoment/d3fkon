
  import { extendType } from '@nexus/schema'
  export const bookingMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnebooking({"alias":"createOnebooking"})
	t.crud.updateOnebooking({"alias":"updateOnebooking"})
	t.crud.deleteOnebooking({"alias":"deleteOnebooking"})
	t.crud.upsertOnebooking({"alias":"upsertOnebooking"})
	t.crud.updateManybooking({"alias":"updateManybooking"})
	t.crud.deleteManybooking({"alias":"deleteManybooking"})
  
      }
    })
    
