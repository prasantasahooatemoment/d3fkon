
  import { extendType } from '@nexus/schema'
  export const gymMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym({"alias":"createOnegym"})
	t.crud.updateOnegym({"alias":"updateOnegym"})
	t.crud.deleteOnegym({"alias":"deleteOnegym"})
	t.crud.upsertOnegym({"alias":"upsertOnegym"})
	t.crud.updateManygym({"alias":"updateManygym"})
	t.crud.deleteManygym({"alias":"deleteManygym"})
  
      }
    })
    
