
  import { extendType } from '@nexus/schema'
  export const gymPackageMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_package({"alias":"createOnegymPackage"})
	t.crud.updateOnegym_package({"alias":"updateOnegymPackage"})
	t.crud.deleteOnegym_package({"alias":"deleteOnegymPackage"})
	t.crud.upsertOnegym_package({"alias":"upsertOnegymPackage"})
	t.crud.updateManygym_package({"alias":"updateManygymPackage"})
	t.crud.deleteManygym_package({"alias":"deleteManygymPackage"})
  
      }
    })
    
