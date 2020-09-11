
import { objectType } from '@nexus/schema'
export const ticket = objectType({
    name:'ticket',
    definition(t){
     t.model.created_at()
	t.model.driver_id()
	t.model.id()
	t.model.name({
		alias:'subject'
	})
	t.field('description',{
		type:'String',
		async resolve(root, args, ctx, info){
			const messages =  await ctx.prisma.ticket_history.findMany({
				where:{
					ticket_id:root.id
				},
				orderBy:{
					created_at:'asc'
				},
				take:1,
			})
			return messages[0].message;
		}
	})
	t.model.open()
	t.model.store_id()
	t.model.type()
	t.model.user_id()
	t.model.driver()
	t.model.store()
	t.model.user()
	t.model.ticket_history()
    }
  })

    
