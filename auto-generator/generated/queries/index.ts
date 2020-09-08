
import * as bookingQuery from './booking.queries';
import * as classProfileQuery from './classProfile.queries';
import * as featureQuery from './feature.queries';
import * as gymQuery from './gym.queries';
import * as gymClassQuery from './gymClass.queries';
import * as gymFeaturesQuery from './gymFeatures.queries';
import * as gymMembershipQuery from './gymMembership.queries';
import * as gymPackageQuery from './gymPackage.queries';
import * as gymPromocodeQuery from './gymPromocode.queries';
import * as gymReviewsQuery from './gymReviews.queries';
import * as instructorQuery from './instructor.queries';
import * as instructorFeaturesQuery from './instructorFeatures.queries';
import * as instructorPackageQuery from './instructorPackage.queries';
import * as instructorReviewsQuery from './instructorReviews.queries';
import * as instructorTimeslotsQuery from './instructorTimeslots.queries';
import * as instructorVenuesQuery from './instructorVenues.queries';
import * as reviewQuery from './review.queries';
import * as timeslotQuery from './timeslot.queries';
import * as userQuery from './user.queries';
import * as userMembershipsQuery from './userMemberships.queries';
import * as venueQuery from './venue.queries';
import * as walletQuery from './wallet.queries';
import * as walletTransactionQuery from './walletTransaction.queries';

export const Queries = {
  ...bookingQuery,
...classProfileQuery,
...featureQuery,
...gymQuery,
...gymClassQuery,
...gymFeaturesQuery,
...gymMembershipQuery,
...gymPackageQuery,
...gymPromocodeQuery,
...gymReviewsQuery,
...instructorQuery,
...instructorFeaturesQuery,
...instructorPackageQuery,
...instructorReviewsQuery,
...instructorTimeslotsQuery,
...instructorVenuesQuery,
...reviewQuery,
...timeslotQuery,
...userQuery,
...userMembershipsQuery,
...venueQuery,
...walletQuery,
...walletTransactionQuery,
}

    
