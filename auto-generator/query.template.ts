export const queryTemplate = `
import { extendType } from '@nexus/schema'

export const $queryName = extendType({
  type: 'Query',
  definition(t) {
    $cruds
  }
})

    
`