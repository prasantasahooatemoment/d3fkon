
import { objectType } from '@nexus/schema'
export const walletTransaction = objectType({
    name:'wallet_transaction',
    definition(t){
     t.model.amount()
	t.model.date()
	t.model.id()
	t.model.status()
	t.model.type()
	t.model.wallet_id()
	t.model.wallet()
	t.model.booking()
    }
  })

    
