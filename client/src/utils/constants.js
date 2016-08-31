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

  EVENTS_TYPES: {
    'hapoel-tlv': {
      src: 'https://upload.wikimedia.org/wikipedia/he/0/07/Hapoel_Tel_Aviv_New_Logo.png',
      name: 'הפועל ירושלים - הפועל תל אביב'
    },
    'summer-event': {
      src: 'http://www.koolbadges.co.uk/images/thumbnails/sweetsummergreen-200x200.jpg',
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
    METHODS: {
      EMAIL: 'email',
      SMS: 'sms'
    },
    TYPES: {
      TEMPLATE: 'template',
      CUSTOM: 'custom'
    }
  }
};
