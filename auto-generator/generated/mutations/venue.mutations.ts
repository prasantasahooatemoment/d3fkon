
  import { extendType } from '@nexus/schema'
  export const venueMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnevenue({"alias":"createOnevenue"})
	t.crud.updateOnevenue({"alias":"updateOnevenue"})
	t.crud.deleteOnevenue({"alias":"deleteOnevenue"})
	t.crud.upsertOnevenue({"alias":"upsertOnevenue"})
	t.crud.updateManyvenue({"alias":"updateManyvenue"})
	t.crud.deleteManyvenue({"alias":"deleteManyvenue"})
  
      }
    })
    
