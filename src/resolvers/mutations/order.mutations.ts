
  import { extendType } from '@nexus/schema'
  export const orderMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneorder({"alias":"createOneorder", 
       computedInputs:{
         otp: ()=> Math.floor(1000 + Math.random() * 9000).toString(),
        ref_no: () => alphanumeric_unique().toUpperCase(),
       },
       async resolve(root, args, ctx, info, original){
         const res = original(root,args,ctx,info);
          return res;
        }})
	t.crud.updateOneorder({"alias":"updateOneorder"})
	t.crud.deleteOneorder({"alias":"deleteOneorder"})
	t.crud.upsertOneorder({"alias":"upsertOneorder"})
	t.crud.updateManyorder({"alias":"updateManyorder"})
	t.crud.deleteManyorder({"alias":"deleteManyorder"})
  
      }
    })

    function alphanumeric_unique() {
      return Math.random().toString(36).split('').filter( function(value, index, self) { 
          return self.indexOf(value) === index;
      }).join('').substr(2,11);
  }
  
