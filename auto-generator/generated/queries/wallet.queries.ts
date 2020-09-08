
import { extendType } from '@nexus/schema'

export const walletQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.wallet({"filtering":true, "ordering":true, "alias":"wallet"})
	t.crud.wallets({"filtering":true, "ordering":true, "alias":"wallets"})
  }
})

    
