
  import { extendType } from '@nexus/schema'
  export const gymFeaturesMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_features({"alias":"createOnegymFeatures"})
	t.crud.updateOnegym_features({"alias":"updateOnegymFeatures"})
	t.crud.deleteOnegym_features({"alias":"deleteOnegymFeatures"})
	t.crud.upsertOnegym_features({"alias":"upsertOnegymFeatures"})
	t.crud.updateManygym_features({"alias":"updateManygymFeatures"})
	t.crud.deleteManygym_features({"alias":"deleteManygymFeatures"})
  
      }
    })
    
