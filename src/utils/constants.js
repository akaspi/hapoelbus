module.exports = {
  ROUTING: {
    PAGES: {
      HOME: 'home',
      AUTH: 'auth',
      USERS: 'users',
      GAMES: 'games',
      BOOKINGS: 'bookings',
      DISTRIBUTION: 'distribution',
      EDIT_USER_INFO: 'editUserInfo',
      UPDATE_BOOKING: 'updateBooking',
      UPDATE_GAME: 'updateGame'
    }
  },
  GAME: {
    STATUS: {
      CLOSED: 'closed',
      OPEN_FOR_MEMBERS: 'openForMembers',
      OPEN_FOR_ALL: 'openForAll',
      FULLY_BOOKED: 'fullyBooked'
    }
  },
  USER: {
    MAX_SEASON_TICKETS: 7,
    PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058'],
  },
  STATIONS: {
    TEL_AVIV: 'tlv',
    MODIIN: 'modiin'
  },
  DATE_AND_TIME: {
    days: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    years: ['16', '17'],
    hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    minutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  },
  DISTRIBUTION: {
    DISTRIBUTION_METHODS: {
      EMAIL: 'email',
      SMS: 'sms'
    },
    RECIPIENTS_TYPES: {
      ALL: 'all',
      MEMBERS_ONLY: 'membersOnly',
      BOOKED_TO_EVENT: 'bookedToEvent'
    },
    DISTRIBUTION_TYPES: {
      TEMPLATE: 'template',
      CUSTOM: 'custom'
    },
    TEMPLATES: {
      EVENT_OPEN_FOR_MEMBERS: '4fab6b92-bf61-48f1-b13b-bc702ed78695',
      EVENT_OPEN_FOR_ALL: 'dbe3e0e4-bb0e-41ad-bf12-5be64a30f3b7',
      CHANGE_EVENT_DETAILS: '170fcd4f-df2e-44dd-b760-693d04fdd07c'
    }
  }
};