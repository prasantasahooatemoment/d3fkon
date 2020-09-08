
  import { extendType } from '@nexus/schema'
  export const gymClassMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_class({"alias":"createOnegymClass"})
	t.crud.updateOnegym_class({"alias":"updateOnegymClass"})
	t.crud.deleteOnegym_class({"alias":"deleteOnegymClass"})
	t.crud.upsertOnegym_class({"alias":"upsertOnegymClass"})
	t.crud.updateManygym_class({"alias":"updateManygymClass"})
	t.crud.deleteManygym_class({"alias":"deleteManygymClass"})
  
      }
    })
    
