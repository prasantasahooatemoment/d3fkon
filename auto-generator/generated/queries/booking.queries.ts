
import { extendType } from '@nexus/schema'

export const bookingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.booking({"filtering":true, "ordering":true, "alias":"booking"})
	t.crud.bookings({"filtering":true, "ordering":true, "alias":"bookings"})
  }
})

    
