
import { objectType } from '@nexus/schema'
export const store = objectType({
    name:'store',
    definition(t){
     t.model.active()
	t.model.address_id()
	t.model.created_at()
	t.model.id()
	t.model.logo()
	t.model.name()
	t.model.address()
	t.model.bank_detail()
	t.model.product({
		filtering:true
	})
	t.model.order()
	t.model.store_document()
	t.model.ticket()
	t.field('popularity', {
		type:"Int",
		async resolve(root, args, ctx, info) {
			return await ctx.prisma.order.count({
				where:{
						store:{
								id:root.id
					}
				}
			})
		}
	})
	t.field('earnings',{
		type:"Float",
		async resolve(root, args, ctx, info){
			const sum = await ctx.prisma.transaction.aggregate({
				where:{
					order:{
						 store_id:{
							 equals: root.id
						 }
					}
				},
				sum:{
					amount:true
				}
			})
			return sum.sum.amount || 0;

		}
	})	
}
	
  })

    
