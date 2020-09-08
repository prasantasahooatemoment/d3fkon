
  import { extendType } from '@nexus/schema'
  export const classProfileMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneclass_profile({"alias":"createOneclassProfile"})
	t.crud.updateOneclass_profile({"alias":"updateOneclassProfile"})
	t.crud.deleteOneclass_profile({"alias":"deleteOneclassProfile"})
	t.crud.upsertOneclass_profile({"alias":"upsertOneclassProfile"})
	t.crud.updateManyclass_profile({"alias":"updateManyclassProfile"})
	t.crud.deleteManyclass_profile({"alias":"deleteManyclassProfile"})
  
      }
    })
    
