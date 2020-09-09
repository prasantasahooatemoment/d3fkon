
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
        const stores = await ctx.prisma.store.findMany({
          include:{
            order:true
          }
        })
      return stores.sort((a,b)=>(b.order.length - a.order.length)).slice(0,10);
      }
    })

    t.field('storesWithOffers',{
      type:'store',
      list:true,
      resolve: async (root,args,ctx,info)=>{
        const storesWithOffers = await ctx.prisma.store.findMany({
          where:{
            product:{
              some:{
                offer:{
                  equals:true
                }
              }
            }
          },
          include:{
            product:true
          }
        })

        storesWithOffers.forEach((e,i, arr)=>{
          arr[i].product = arr[i].product.filter((x)=>x.offer == true);
        })
        console.log(storesWithOffers[0].product.length);
        return storesWithOffers;

      }
    })
}
});

    
