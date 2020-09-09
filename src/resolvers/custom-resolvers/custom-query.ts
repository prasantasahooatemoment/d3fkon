
import { extendType, stringArg } from '@nexus/schema'

export const bookingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('search',{
      type:'searchObj',
      args:{
        query:stringArg(),
        type:stringArg()
      },
      resolve: async (root, args, ctx, info)=>{
        args.query = args.query.toLowerCase();
        const result = await ctx.prisma.store.findMany({
          where:{
            name:{
              contains:args.query,
              mode:'insensitive'
            }
          },
          include:{
            address:true,
            product:true,
          }
        })
        return {result};
    
      }
    })

    t.field('popularStores',{
      type:'store',
      list:true,
      resolve: async (root, args, ctx, info)=>{
        let stores = await ctx.prisma.store.findMany({
          include:{
            order:true
          }
        })
        stores = stores.filter(e=>e.order.length > 0);
      return stores.sort((a,b)=>(b.order.length - a.order.length)).slice(0,10);
      }
    })

    t.crud.stores({
      alias:'storesWithOffers',
      pagination:true,
      ordering:true,
      filtering:true,
      computedInputs:{
        where: () => ({ product:{
          some:{
            offer:true
          }
        }})
      }
    })
}
});

    
