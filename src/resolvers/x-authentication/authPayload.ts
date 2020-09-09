import { objectType } from '@nexus/schema'

// export const AuthPayload = objectType({
//   name: 'AuthPayload',
//   definition(t) {
//     t.string('accessToken')
//     t.field('user', { type: 'client_user' })
//   },
// })

export const MobileAuthPayload = objectType({
  name: 'MobileAuthPayload',
  definition(t) {
    t.string('accessToken')
    t.field('user', { type: 'user' })
  },
})