import { extendType, intArg, floatArg } from '@nexus/schema'
import { Upload } from './upload'
import * as AWS from 'aws-sdk/clients/s3'
export const uploadMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('uploadImage', {
      type: 'imageObj',
      args: {
        image: Upload,
      },
      async resolve(root, args, ctx, info) {
        const awsClient = new AWS({
          accessKeyId: 'SCW5KR0FDKYQEJ9P31T2',
          secretAccessKey: 'a461d08a-a096-4bf8-b2c9-538a8c626416',
          region: 'fr-par',
          maxRetries:2,
          endpoint: 'https://s3.fr-par.scw.cloud',
        })
        const image = await args.image
         await awsClient
          .upload({
            Bucket: 'boilerplate-bucket',
              Key: image.filename,
            Body: image.createReadStream(),
            ACL: 'public-read',
          }).promise()
          
        return { imageUrl: `https://boilerplate-bucket.s3.fr-par.scw.cloud/${image.filename}`}
      },
    })

    t.crud.createOneaddress({
      alias:"createAddress",
      resolve: async(root, args, ctx, info, original)=>{
          args.user_addresses = {
            create:{
              user:{
                connect:{
                  id:ctx.userId
                }
              }
            }
          }
          return original(root, args, ctx, info);
      }
    })
  },
})
