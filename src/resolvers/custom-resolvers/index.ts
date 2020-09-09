import * as userMutations from "./user.mutations"
import * as walletMutations from './wallet.mutations'
import * as bookingMutations from './booking.mutations'
import * as bookClass from './custom-instances'
import * as bookingQueries from './booking.query'
import * as otp from './otp.mutations'
import * as search from './custom-query'
import * as Upload from './upload'
import * as imageMutation from './custom.mutations'
export const customMutations =  {
    // ...userMutations,
    // ...bookingQueries,
    // ...walletMutations,
    // ...bookingMutations,
    ...search,
    ...otp,
    ...bookClass,
    ...Upload,
    ...imageMutation
}
