
  import { extendType } from '@nexus/schema'
  export const instructorMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor({"alias":"createOneinstructor"})
	t.crud.updateOneinstructor({"alias":"updateOneinstructor"})
	t.crud.deleteOneinstructor({"alias":"deleteOneinstructor"})
	t.crud.upsertOneinstructor({"alias":"upsertOneinstructor"})
	t.crud.updateManyinstructor({"alias":"updateManyinstructor"})
	t.crud.deleteManyinstructor({"alias":"deleteManyinstructor"})
  
      }
    })
    
