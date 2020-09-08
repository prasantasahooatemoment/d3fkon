
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
}
});

    
