const Constants = require('./constants');

module.exports = {
  ROUTING: {
    PAGES: {
      [Constants.ROUTING.PAGES.HOME]: 'דף הבית',
      [Constants.ROUTING.PAGES.USERS]: 'משתמשים',
      [Constants.ROUTING.PAGES.GAMES]: 'משחקים',
      [Constants.ROUTING.PAGES.BOOKINGS]: 'רשומים להסעות',
      [Constants.ROUTING.PAGES.DISTRIBUTION]: 'רשימת תפוצה',
    }
  },
  STATIONS: {
    [Constants.STATIONS.TEL_AVIV]: 'תל אביב',
    [Constants.STATIONS.MODIIN]: 'צומת שילת'
  },
  GAME_ITEM: {
    BOOK: 'הרשם',
    EDIT_BOOKING: 'ערוך',
    CANCEL_BOOKING: 'בטל הרשמה'
  },
  USERS_PAGE: {
    TITLE: 'משתמשים',
    NO_USERS_FOUND: 'לא נמצאו רשומות',
    FILTER: {
      SEARCH: 'חיפוש',
      TABS: {
        ALL: 'כולם',
        MEMBERS: 'מנויים',
        REQUESTS: 'בקשה למנוי',
        NON_MEMBERS: 'חד פעמיים'
      }
    }
  },
  UPDATE_USER_INFO_PAGE: {
    TITLE: 'פרטים אישיים',
    FIRST_NAME: 'שם',
    LAST_NAME: 'שם משפחה',
    EMAIL: 'דואר אלקטרוני',
    PHONE_PREFIX: 'קידומת',
    PHONE_NUMBER: 'טלפון נייד',
    FAVORITE_PICKUP_STATION: 'תחנת עליה מועדפת',
    REQUEST_FOR_MEMBERSHIP: 'מעוניין במנוי?',
    DISTRIBUTION: {
      EMAIL: 'תפוצת אימייל',
      SMS: 'תפוצת SMS'
    },
    TOGGLE: {
      YES: 'כן',
      NO: 'לא'
    }
  },
  UPDATE_BOOKING_PAGE: {
    TITLE: 'עריכת הרשמה',
    PAID_SEATS: 'כמות מנויים',
    EXTRA_SEATS: 'נוסעים בתשלום',
    PICKUP_TOGGLE: 'הלוך',
    DROPOFF_TOGGLE: 'חזור',
    PICKUP_STATION_DROPDOWN_DEFAULT: 'בחר'
  },
  UPDATE_GAME_PAGE: {
    TITLE: 'הרשמה להסעה',
    GAME_LABEL: 'שם המשחק',
    GAME_PLACEHOLDER: 'בחר משחק',
    DATE_LABEL: 'תאריך',
    TIME: 'שעה',
    GAME_STATUS: 'סטטוס הסעה'
  },
  ERROR_MESSAGES: {
    GENERAL: 'שגיאת מערכת',
    AUTH: {
      INVALID_EMAIL: 'אימייל לא תקין',
      WEAK_PASSWORD: 'הסיסמא צריכה להכיל לפחות 6 תווים',
      EMAIL_IN_USE: 'אימייל בשימוש',
      WRONG_PASSWORD: 'סיסמא לא נכונה',
      NOT_SAME_PASSWORD: 'הסיסמאות צריכות להיות זהות',
      USER_NOT_FOUND: 'כתובת האימייל לא נמצאה'
    }
  }
};
