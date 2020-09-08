
  import { extendType } from '@nexus/schema'
  export const gymPromocodeMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_promocode({"alias":"createOnegymPromocode"})
	t.crud.updateOnegym_promocode({"alias":"updateOnegymPromocode"})
	t.crud.deleteOnegym_promocode({"alias":"deleteOnegymPromocode"})
	t.crud.upsertOnegym_promocode({"alias":"upsertOnegymPromocode"})
	t.crud.updateManygym_promocode({"alias":"updateManygymPromocode"})
	t.crud.deleteManygym_promocode({"alias":"deleteManygymPromocode"})
  
      }
    })
    
