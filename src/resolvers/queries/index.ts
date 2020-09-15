
import * as addressQuery from './address.queries';
import * as bankDetailQuery from './bankDetail.queries';
import * as driverQuery from './driver.queries';
import * as devlogQuery from './devlog.queries';
import * as driverDocumentQuery from './driverDocument.queries';
import * as orderQuery from './order.queries';
import * as orderProductsQuery from './orderProducts.queries';
import * as productQuery from './product.queries';
import * as productImageQuery from './productImage.queries';
import * as productSizesQuery from './productSizes.queries';
import * as ratingQuery from './rating.queries';
import * as sizeQuery from './size.queries';
import * as storeQuery from './store.queries';
import * as storeDocumentQuery from './storeDocument.queries';
import * as ticketQuery from './ticket.queries';
import * as ticketHistoryQuery from './ticketHistory.queries';
import * as transactionQuery from './transaction.queries';
import * as userQuery from './user.queries';
import * as userAddressesQuery from './userAddresses.queries';

export const Queries = {
  ...addressQuery,
...bankDetailQuery,
...driverQuery,
...devlogQuery,
...driverDocumentQuery,
...orderQuery,
...orderProductsQuery,
...productQuery,
...productImageQuery,
...productSizesQuery,
...ratingQuery,
...sizeQuery,
...storeQuery,
...storeDocumentQuery,
...ticketQuery,
...ticketHistoryQuery,
...transactionQuery,
...userQuery,
...userAddressesQuery,
}

    
