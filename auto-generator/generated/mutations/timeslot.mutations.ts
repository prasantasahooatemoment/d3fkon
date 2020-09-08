
  import { extendType } from '@nexus/schema'
  export const timeslotMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnetimeslot({"alias":"createOnetimeslot"})
	t.crud.updateOnetimeslot({"alias":"updateOnetimeslot"})
	t.crud.deleteOnetimeslot({"alias":"deleteOnetimeslot"})
	t.crud.upsertOnetimeslot({"alias":"upsertOnetimeslot"})
	t.crud.updateManytimeslot({"alias":"updateManytimeslot"})
	t.crud.deleteManytimeslot({"alias":"deleteManytimeslot"})
  
      }
    })
    
