import { intArg, makeSchema, objectType, subscriptionField } from '@nexus/schema'
import * as allTypes from './resolvers';
import { Context } from './types';
import { join } from 'path';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

export const schema = makeSchema({
  types: [allTypes],
  plugins: [nexusSchemaPrisma({experimentalCRUD:true, prismaClient: (ctx:Context) => ctx.prisma, 

})],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  }
})
