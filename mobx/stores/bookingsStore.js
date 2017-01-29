import mapValues from 'lodash/mapValues';
import forOwn from 'lodash/forOwn';
import { observable, extendObservable, action } from 'mobx';

class Booking {
  constructor(booking) {
    extendObservable(this, {
      paidSeats: booking.paidSeats,
      extraSeats: booking.extraSeats,
      pickUp: booking.pickUp,
      dropOff: booking.dropOff
    });
  }

  @action update = partialBooking => {
    extendObservable(this, partialBooking);
  }
}

class BookingsStore {
  @observable bookings = observable.map({});

  @action setBookings = bookings => {
    forOwn(bookings, (userBookings, uid) => this.addUserBookings(uid, userBookings));
  };

  @action addUserBookings = (uid, userBookings) => {
    this.bookings.set(uid, observable.map(mapValues(userBookings, bookingData => new Booking(bookingData))));
  };

  @action removeUserBookings = uid => {
    this.bookings.delete(uid);
  };

  @action addBookingItem = (uid, gameId, bookingItem) => {
    const userBookings = this.bookings.get(uid);
    userBookings.set(gameId, new Booking(bookingItem));
  };

  @action updateBookingItem = (uid, gameId, bookingItem) => {
    const userBookings = this.bookings.get(uid);
    const currentBookingItem = userBookings.get(gameId);
    if (currentBookingItem) {
      currentBookingItem.update(bookingItem);
    }
  };

  @action removeBookingItem = (uid, gameId) => {
    if (this.bookings.has(uid)) {
      this.bookings.get(uid).delete(gameId);
    }
  }

}

const bookingsStore = new BookingsStore();

export default bookingsStore;
export { BookingsStore };