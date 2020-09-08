import * as Queries from './queries'
import * as Instances from './instances'
import * as Mutations from './mutations'
import * as customMutations from './custom-resolvers'
import {authenticationMutation} from './x-authentication/authentication.mutation'
import {AuthPayload, MobileAuthPayload} from './x-authentication/authPayload';
export {
    Queries,
    Instances,
    Mutations,
    customMutations,
    // AuthPayload,
    // MobileAuthPayload,
    // authenticationMutation
}
