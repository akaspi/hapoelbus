module.exports = {
  ERRORS: {
    GENERAL: 'שגיאה במערכת',
    INVALID_MAIL: 'אימייל לא תקין.',
    WEAK_PASSWORD: 'הסיסמא צריכה להכיל לפחות 6 תווים.',
    EMAIL_IN_USE: 'אימייל בשימוש. אנא בחר דרך התחברות אחרת.',
    WRONG_PASSWORD: 'סיסמא לא נכונה.',
    NOT_SAME_PASSWORD: 'סיסמאות צריכות להיות זהות.'
  },

  DATE_TIME_DATA: {
    days: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    years: ['16', '17'],
    hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    minutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  },

  EVENT_DEFAULT_PIC: 'http://image.flaticon.com/icons/svg/124/124150.svg',
  EVENTS_TYPES: {
    'hapoel-tlv': {
      src: 'https://upload.wikimedia.org/wikipedia/he/thumb/5/52/Hapoel_Tel_Aviv_Logo.png/480px-Hapoel_Tel_Aviv_Logo.png',
      name: 'הפועל תל אביב'
    },
    'macabi-tlv': {
      src: 'https://upload.wikimedia.org/wikipedia/he/thumb/1/14/MaccabiLogo.png/400px-MaccabiLogo.png',
      name: 'מכבי תל אביב'
    },
    'summer-event': {
      src: 'http://image.flaticon.com/icons/svg/164/164789.svg',
      name: 'אירוע הקיץ'
    }
  },
  STATIONS: {
    modiin: 'מודיעין',
    tlv: 'תל אביב'
  },
  MAX_SEASON_TICKETS: 7,
  MAX_EXTRA_PASSENGERS: 4,
  PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058'],
  PAGES: {
    HOME: 'home',
    AUTH: 'auth',
    USERS: 'users',
    EVENTS: 'events',
    BOOKINGS: 'bookings',
    DISTRIBUTION: 'distribution'
  },
  EVENTS_STATUS: {
    CLOSED: {
      value: 'closed',
      name: 'ההרשמה סגורה'
    },
    OPEN_FOR_MEMBERS: {
      value: 'openForMembers',
      name: 'ההרשמה פתוחה למנויי הסעות'
    },
    OPEN_FOR_ALL: {
      value: 'openForAll',
      name: 'ההרשמה פתוחה לכולם'
    }
  },
  DISTRIBUTION: {
    RECIPIENTS: {
      ALL: {
        value: 'allUsers',
        name: 'כלל המשתמשים'
      },
      MEMBERS_ONLY: {
        value: 'membersOnly',
        name: 'מנויים בלבד'
      }
    },
    METHODS: {
      EMAIL: 'email',
      SMS: 'sms'
    },
    TYPES: {
      TEMPLATE: 'template',
      CUSTOM: 'custom'
    },
    TEMPLATES: {
      EVENT_OPEN_FOR_MEMBERS: {
        id: 'some-template-id',
        name: 'פתיחת הרשמה למנויים'
      }
    }
  }
};
