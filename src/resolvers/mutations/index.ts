
import * as addressMutations from './address.mutations';
import * as bankDetailMutations from './bankDetail.mutations';
import * as driverMutations from './driver.mutations';
import * as driverDocumentMutations from './driverDocument.mutations';
import * as orderMutations from './order.mutations';
import * as orderProductsMutations from './orderProducts.mutations';
import * as productMutations from './product.mutations';
import * as productImageMutations from './productImage.mutations';
import * as productSizesMutations from './productSizes.mutations';
import * as ratingMutations from './rating.mutations';
import * as sizeMutations from './size.mutations';
import * as storeMutations from './store.mutations';
import * as storeDocumentMutations from './storeDocument.mutations';
import * as ticketMutations from './ticket.mutations';
import * as ticketHistoryMutations from './ticketHistory.mutations';
import * as transactionMutations from './transaction.mutations';
import * as userMutations from './user.mutations';
import * as userAddressesMutations from './userAddresses.mutations';

export const Mutations = {
  ...addressMutations,
...bankDetailMutations,
...driverMutations,
...driverDocumentMutations,
...orderMutations,
...orderProductsMutations,
...productMutations,
...productImageMutations,
...productSizesMutations,
...ratingMutations,
...sizeMutations,
...storeMutations,
...storeDocumentMutations,
...ticketMutations,
...ticketHistoryMutations,
...transactionMutations,
...userMutations,
...userAddressesMutations,
}

    
