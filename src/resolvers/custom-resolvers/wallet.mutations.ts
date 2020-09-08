
  import { extendType, intArg, floatArg } from '@nexus/schema'
  export const walletMutations = extendType({
    type:'Mutation',
      definition(t){
          t.field('addToWallet',{
              type:'wallet',
               args:{
                   amount:floatArg()
               },
               resolve: async (root, args, context, info) => {
                let wallet = await context.prisma.user.findOne({
                    where:{
                        id: context.userId
                    },
                    include:{
                        wallet:true
                    }
                });
                wallet = wallet?.wallet[0];
                console.log(wallet);
                const amount = Number(wallet?.amount);
                const updated = await context.prisma.wallet.update({
                    where:{
                        id: wallet?.id
                    },
                    data:{
                        amount:Number(Number(amount)+Number(args.amount))
                    }
                })
                if(updated){
                    const transaction = await context.prisma.wallet_transaction.create({
                        data:{
                            amount:args.amount,
                            date:new Date().toISOString(),
                            status:"finshed",
                            type:"top_up",
                            wallet:{
                                connect:{
                                    id:wallet?.id
                                }
                            }
                        }
                    })
                }
                wallet.amount += args.amount;
                return wallet;
            }
            })
      }
    })
    
