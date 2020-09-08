export const mutationTemplate = `
  import { extendType } from '@nexus/schema'
  export const $mutationName = extendType({
    type:'Mutation',
      definition(t){
       $cruds
  
      }
    })
    
`