
import { extendType } from '@nexus/schema'

export const gymPromocodeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymPromocode({"filtering":true, "ordering":true, "alias":"gymPromocode"})
	t.crud.gymPromocodes({"filtering":true, "ordering":true, "alias":"gymPromocodes"})
  }
})

    
