
  import { extendType } from '@nexus/schema'
  export const instructorTimeslotsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor_timeslots({"alias":"createOneinstructorTimeslots"})
	t.crud.updateOneinstructor_timeslots({"alias":"updateOneinstructorTimeslots"})
	t.crud.deleteOneinstructor_timeslots({"alias":"deleteOneinstructorTimeslots"})
	t.crud.upsertOneinstructor_timeslots({"alias":"upsertOneinstructorTimeslots"})
	t.crud.updateManyinstructor_timeslots({"alias":"updateManyinstructorTimeslots"})
	t.crud.deleteManyinstructor_timeslots({"alias":"deleteManyinstructorTimeslots"})
  
      }
    })
    
