import _ from 'lodash';
import { computed } from 'mobx';

import * as dbBookings from '../database/dbBookings';

export default class BookingsAPI {
  constructor(stores) {
    this.stores = stores;
  }

  @computed get bookings() {
    return this.stores.bookingsStore.bookings.toJS();
  }

  @computed get usersBookings() {
    const uid = _.get(this.stores.authStore, ['authData', 'uid']);
    if (this.stores.bookingsStore.bookings.has(uid)) {
      return this.stores.bookingsStore.bookings.get(uid).toJS();
    }
    return {};
  }

  updateBooking = dbBookings.updateBooking;

  removeBooking = dbBookings.removeBooking;
}