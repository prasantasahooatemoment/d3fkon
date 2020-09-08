
  import { extendType } from '@nexus/schema'
  export const instructorPackageMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor_package({"alias":"createOneinstructorPackage"})
	t.crud.updateOneinstructor_package({"alias":"updateOneinstructorPackage"})
	t.crud.deleteOneinstructor_package({"alias":"deleteOneinstructorPackage"})
	t.crud.upsertOneinstructor_package({"alias":"upsertOneinstructorPackage"})
	t.crud.updateManyinstructor_package({"alias":"updateManyinstructorPackage"})
	t.crud.deleteManyinstructor_package({"alias":"deleteManyinstructorPackage"})
  
      }
    })
    
