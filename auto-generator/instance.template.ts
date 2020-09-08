export const instanceTemplate = `
import { objectType } from '@nexus/schema'
export const $instanceName = objectType({
    name:$instanceType,
    definition(t){
     $models
    }
  })

    
`