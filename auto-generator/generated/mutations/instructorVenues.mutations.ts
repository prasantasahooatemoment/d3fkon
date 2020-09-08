
  import { extendType } from '@nexus/schema'
  export const instructorVenuesMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor_venues({"alias":"createOneinstructorVenues"})
	t.crud.updateOneinstructor_venues({"alias":"updateOneinstructorVenues"})
	t.crud.deleteOneinstructor_venues({"alias":"deleteOneinstructorVenues"})
	t.crud.upsertOneinstructor_venues({"alias":"upsertOneinstructorVenues"})
	t.crud.updateManyinstructor_venues({"alias":"updateManyinstructorVenues"})
	t.crud.deleteManyinstructor_venues({"alias":"deleteManyinstructorVenues"})
  
      }
    })
    
