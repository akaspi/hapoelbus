import mapValues from 'lodash/mapValues';
import forOwn from 'lodash/forOwn';
import { observable, extendObservable, action } from 'mobx';

function toUsersBookingsMap(userBookings) {
  const userBookingsMap = observable.map({});
  forOwn(userBookings, (booking, gameId) => userBookingsMap.set(gameId, new Booking(booking)));
  return userBookingsMap;
}

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
    const bookingsToReplace = mapValues(bookings, toUsersBookingsMap);
    this.bookings.replace(bookingsToReplace);
  };

  @action updateBookings = (uid, userBookings) => {
    this.bookings.merge({ [uid]: toUsersBookingsMap(userBookings) });
  };

  // @action updateBooking = (uid, gameId, booking) => {
  //   if (!this.bookings.has(uid)) {
  //     this.bookings.set(uid, observable.map({}));
  //   }
  //   const userBookingsMap = this.bookings.get(uid);
  //
  //   if (userBookingsMap.has(gameId)) {
  //     const currentBooking = userBookingsMap.get(gameId);
  //     currentBooking.update(booking);
  //   } else {
  //     userBookingsMap.set(gameId, new Booking(booking));
  //   }
  // };

  @action removeBooking = (uid, gameId) => {
    if (this.bookings.has(uid)) {
      const userBookings = this.bookings.get(uid);
      userBookings.delete(gameId);

      if (userBookings.size === 0) {
        this.bookings.delete(uid);
      }
    }
  }

}

const bookingsStore = new BookingsStore();

export default bookingsStore;
export { BookingsStore };