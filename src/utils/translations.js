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
  GAME: {
    STATUS: {
      [Constants.GAME.STATUS.CLOSED]: 'ההרשמה סגורה',
      [Constants.GAME.STATUS.OPEN_FOR_MEMBERS]: 'ההרשמה פתוחה למנויים',
      [Constants.GAME.STATUS.OPEN_FOR_ALL]: 'ההרשמה פתוחה לכולם',
      [Constants.GAME.STATUS.FULLY_BOOKED]: 'ההסעה מלאה',
    }
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
  AUTH_PAGE: {
    FIELDS: {
      EMAIL: 'דואר אלקטרוני',
      PASSWORD: 'סיסמא',
      PASSWORD_AGAIN: 'שוב סיסמא'
    },
    SUBMIT_BTN: {
      LOGIN: 'התחבר',
      REGISTER: 'הירשם',
      FORGOT_PASSWORD: 'שלח לינק לאיפוס סיסמא'
    },
    LINKS: {
      GO_TO_LOGIN: 'יש לך חשבון?',
      GO_TO_REGISTER: 'אין לך חשבון?',
      GO_TO_FORGOT_PASSWORD: 'שכחת סיסמא?'
    },
    ERRORS: {
      NOT_SAME_PASSWORD: 'סיסמאות צריכות להיות זהות'
    }
  },
  HOME_PAGE: {
    NO_OPEN_GAMES: 'אין הסעות פתוחות',
    OPEN_GAMES: 'הסעות פתוחות',
    CLOSED_GAMES: 'ההסעות הבאות'
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
  GAMES_PAGE: {
    TITLE: 'משחקים',
    TABS: {
      ALL: 'כולם',
      OPEN: 'פתוחים',
      CLOSED: 'סגורים'
    },
    NO_GAMES_LABEL: 'לא נמצאו משחקים'
  },
  BOOKINGS_PAGE: {
    TITLE: 'רשומים להסעה',
    TABS: {
      PICKUP: 'הלוך',
      DROPOFF: 'חזור'
    }
  },
  UPDATE_GAME_PAGE: {
    TITLE: 'הרשמה להסעה',
    GAME_LABEL: 'שם המשחק',
    GAME_PLACEHOLDER: 'בחר משחק',
    DATE_LABEL: 'תאריך',
    TIME: 'שעה',
    GAME_STATUS: 'סטטוס הסעה'
  },
  DISTRIBUTION_PAGE: {
    TITLE: 'רשימת תפוצה',
    DISTRIBUTION_METHOD: {
      TITLE: 'שליחה באמצעות',
      EMAIL: 'אימייל',
      SMS: 'סמס'
    },
    RECIPIENTS_TYPES: {
      TITLE: 'שלח אל',
      ALL: 'כולם',
      MEMBERS_ONLY: 'מנויים בלבד',
      BOOKED_TO_EVENT: 'רשומים להסעה'
    },
    DISTRIBUTION_TYPES: {
      TITLE: 'צורת שליחה',
      TEMPLATE: 'תבנית',
      CUSTOM: 'טקסט חופשי'
    },
    TEMPLATES: {
      TITLE: 'בחירת תבנית',
      EVENT_OPEN_FOR_MEMBERS: 'פתיחת הרשמה למנויים',
      EVENT_OPEN_FOR_ALL: 'פתיחת הרשמה לכולם',
      CHANGE_EVENT_DETAILS: 'שינוי בפרטי ההסעה'
    },
    GAMES: {
      TITLE: 'בחירת משחק'
    },
    CUSTOM: {
      TITLE: {
        TITLE: 'נושא'
      },
      CONTENT: {
        TITLE: ''
      }
    }
  },
  FORM_FRAME: {
    SUBMIT: 'שמור',
    REMOVE: 'מחק'
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
