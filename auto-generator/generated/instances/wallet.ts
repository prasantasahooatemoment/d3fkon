
import { objectType } from '@nexus/schema'
export const wallet = objectType({
    name:'wallet',
    definition(t){
     t.model.amount()
	t.model.id()
	t.model.last_updated()
	t.model.user_id()
	t.model.user()
	t.model.wallet_transaction()
    }
  })

    
