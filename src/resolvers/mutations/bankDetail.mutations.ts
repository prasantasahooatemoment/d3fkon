
  import { extendType } from '@nexus/schema'
  export const bankDetailMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnebank_detail({"alias":"createOnebankDetail"})
	t.crud.updateOnebank_detail({"alias":"updateOnebankDetail"})
	t.crud.deleteOnebank_detail({"alias":"deleteOnebankDetail"})
	t.crud.upsertOnebank_detail({"alias":"upsertOnebankDetail"})
	t.crud.updateManybank_detail({"alias":"updateManybankDetail"})
	t.crud.deleteManybank_detail({"alias":"deleteManybankDetail"})
  
      }
    })
    
