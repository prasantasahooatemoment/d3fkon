
import { objectType } from '@nexus/schema'
export const user = objectType({
    name:'user',
    definition(t){
     t.model.active()
	t.model.id()
	t.model.mobile()
	t.model.name()
	t.field('orderCount',{
		type:"Int",
		async resolve(root, args, ctx, info) {
			return await ctx.prisma.order.count({
				where:{
					user_id:root.id
				}
			})
		}
	})
	t.field('spendings',{
		type:'Float',
		async resolve(root, args, ctx, info){
			return await ctx.prisma.transaction.count({
				where:{
					user_id:root.id
				}
			})
		}
	})
	t.model.order({
		filtering:true,
		ordering:true,
		pagination:true
	})
	t.model.rating()
	t.model.ticket({
		filtering:true,
		ordering:true,
		pagination:true
	})
	t.model.transaction()
	t.model.user_addresses()
    }
  })

    
