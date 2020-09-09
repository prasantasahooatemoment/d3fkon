import { objectType } from '@nexus/schema'

// export const bookClass = objectType({
//   name: 'bookClass',
//   definition(t) {
//     t.int('id');
//     t.field('class', { type: 'gym_class' })
//   },
// })

// export const gymClassWithLabels = objectType({
//   name: 'gymClassWithLabels',
//   definition(t) {
//     t.field('time', {type: 'String'})
//     t.field('classes', { type: 'gym_class', list: true})
//   },
// })

// export const bookPackage = objectType({
//   name: 'bookPackage',
//   definition(t) {
//     t.int('id');
//     t.field('package', { type: 'gym_package' })
//   },
// })

// export const bookInstructorPackage = objectType({
//   name: 'bookInstructorPackage',
//   definition(t) {
//     t.int('id');
//     t.field('package', { type: 'instructor_package' })
//   },
// })

// export const bookMembership = objectType({
//   name: 'bookMembership',
//   definition(t){
//     t.int('id');
//     t.field('membership', {type: 'gym_membership'})
//   }
// })



// export const testCas = objectType({
//     name: 'test23',
//     definition(t) {
//       t.int('id');
//       t.field('class', { type: 'gym_class' })
//     },
//   })

  export const search = objectType({
    name:'searchObj',
    definition(t){
      t.list.field('result', {
          type:"store"
      });
      // t.field('id');
      // t.field('name');
      
    }
  })

  export const image = objectType({
    name:'imageObj',
    definition(t){
      t.string('imageUrl');
    }
  })

  export const OTP = objectType({
    name:'OTP',
    definition(t){
      t.string('status', {nullable:true})
    }
  })

  