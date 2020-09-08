
import { extendType } from '@nexus/schema'

export const bankDetailQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bankDetail({"filtering":true, "ordering":true, "alias":"bankDetail"})
	t.crud.bankDetails({"filtering":true, "ordering":true, "alias":"bankDetails"})
  }
})

    
