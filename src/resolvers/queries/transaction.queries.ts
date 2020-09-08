
import { extendType } from '@nexus/schema'

export const transactionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.transaction({"filtering":true, "ordering":true, "alias":"transaction"})
	t.crud.transactions({"filtering":true, "ordering":true, "alias":"transactions"})
  }
})

    
