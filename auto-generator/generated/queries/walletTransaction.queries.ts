
import { extendType } from '@nexus/schema'

export const walletTransactionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.walletTransaction({"filtering":true, "ordering":true, "alias":"walletTransaction"})
	t.crud.walletTransactions({"filtering":true, "ordering":true, "alias":"walletTransactions"})
  }
})

    
