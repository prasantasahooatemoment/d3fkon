
  import { extendType } from '@nexus/schema'
  export const walletMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnewallet({"alias":"createOnewallet"})
	t.crud.updateOnewallet({"alias":"updateOnewallet"})
	t.crud.deleteOnewallet({"alias":"deleteOnewallet"})
	t.crud.upsertOnewallet({"alias":"upsertOnewallet"})
	t.crud.updateManywallet({"alias":"updateManywallet"})
	t.crud.deleteManywallet({"alias":"deleteManywallet"})
  
      }
    })
    
