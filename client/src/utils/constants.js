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
      src: 'http://www.basket.co.il/pics/2007/logos/logo_hapoelta.png',
      name: 'הפועל תל אביב'
    },
    'maccabi-tlv': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_maccabi.png',
      name: 'מכבי תל אביב'
    },
    'herzeliya': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_sharon.png',
      name: 'בני הרצליה'
    },
    'kiryat-gat': {
      src: 'http://www.basket.co.il/Images/teams/bigGat.png',
      name: 'מכבי קרית גת'
    },
    'gilboa': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_Galil.png',
      name: 'הפועל גליל/גלבוע'
    },
    'nahariya': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_naharia.png',
      name: 'עירוני נהריה'
    },
    'holon': {
      src: 'http://www.basket.co.il/pics/2007/articles/logo_hh.png',
      name: 'הפועל חולון'
    },
    'ashdod': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_ashdod.png',
      name: 'מכבי אשדוד'
    },
    'haifa': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_haifa.png',
      name: 'מכבי חיפה'
    },
    'rishon': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_rishon.png',
      name: 'מכבי ראשון לציון'
    },
    'eilat': {
      src: 'http://www.basket.co.il/pics/2007/logos/logo_eilat.png',
      name: 'הפועל אילת'
    },
    'ljubljana': {
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Union_olimpija.png/140px-Union_olimpija.png',
      name: 'לובליאנה'
    },
    'valencia': {
      src: 'http://samvanrossom.com/wp-content/uploads/2014/10/valencia-basket1-logo.jpg',
      name: 'ולנסיה'
    },
    'kuban': {
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lokomotiv_Kuban_logo.png/200px-Lokomotiv_Kuban_logo.png',
      name: 'לוקומוטיב קובאן'
    },
    'fuenlabrada': {
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Baloncestofuenlabrada.jpg/110px-Baloncestofuenlabrada.jpg',
      name: 'פואנלברדה'
    },
    'ulm': {
      src: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Ratiopharm_Ulm_logo.png',
      name: 'אולם'
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
    HOME: {val: 'home', name: 'דף הבית'},
    AUTH: {val: 'auth', name: 'בב'},
    USERS: {val: 'users', name: 'משתמשים', visible: true},
    EVENTS: {val: 'events', name: 'אירועים', visible: true},
    BOOKINGS: {val: 'bookings', name: 'רשומים להסעות', visible: true},
    DISTRIBUTION: {val: 'distribution', name: 'מיילים', visible: true}
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
