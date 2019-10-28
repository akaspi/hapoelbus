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
    MAX_SEASON_TICKETS: 6,
    PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058'],
  },
  STATIONS: {
    TEL_AVIV: 'tlv',
    MODIIN: 'modiin',
    FAST_LANE: 'fastlane'
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
  },
  TEAMS: {
    HAPOEL_JERUSALEM: {
      label: 'הפועל ירושלים',
      logo: 'http://hapoel.co.il/sites/default/files/logo120x120.png'
    },
    'hapoel-tlv': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_hapoelta.png',
      label: 'הפועל תל אביב'
    },
    'maccabi-tlv': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_maccabi.png',
      label: 'מכבי תל אביב'
    },
    'herzeliya': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_sharon.png',
      label: 'בני הרצליה'
    },
    'nes-ziona': {
      logo: 'http://www.basket.co.il/Images/teams/logo_ziona.png',
      label: 'עירוני נס ציונה'
    },
    'kiryat-gat': {
      logo: 'http://www.basket.co.il/Images/teams/bigGat.png',
      label: 'מכבי קרית גת'
    },
    'gilboa': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_Galil.png',
      label: 'גליל/גלבוע'
    },
    'nahariya': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_naharia.png',
      label: 'עירוני נהריה'
    },
    'holon': {
      logo: 'http://www.basket.co.il/pics/2007/articles/logo_hh.png',
      label: 'הפועל חולון'
    },
    'ashdod': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_ashdod.png',
      label: 'מכבי אשדוד'
    },
    'bs': {
      logo: 'http://basket.co.il/pics/2018/logo_bs_300x300.png',
      label: 'הפועל באר שבע'
    },
    'rishon': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_rishon.png',
      label: 'מכבי ראשון לציון'
    },
    'eilat': {
      logo: 'http://www.basket.co.il/pics/2007/logos/logo_eilat.png',
      label: 'הפועל אילת'
    },

    'AEK': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/0d/AEK_Basketball_Club_Official_Logo.png',
      label: 'אאק אתונה'
    },
    'bamberg': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/62/Brose_Bamberg_logo.png',
      label: 'באמברג'
    },
    'fuenlabrada': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/54/Logo_of_Baloncesto_Fuenlabrada.png',
      label: 'פואנלברדה'
    },
    'lietkabelis': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/BC_Lietkabelis_logo.svg/240px-BC_Lietkabelis_logo.svg.png',
      label: 'ליטקבליס'
    },
    'dijon': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/JDA_Dijon_Basket_logo.gif',
      label: 'דיז׳ון'
    },
    'entwerp': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/49/Telenet_Giants_logo.png',
      label: ' אנטוורפ'
    },
    'neptunas': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Neptunas-Akvaservis.png',
      label: 'נפטונאס'
    },
    'tenerife': {
      logo: 'http://www.hapoel.co.il/sites/default/files/tenerife.png',
      label: 'טנריף'
    },
    'rasta': {
      logo: 'http://www.hapoel.co.il/sites/default/files/sc_rasta_vechta_logo.jpg',
      label: 'ראסטה וכטה'
    },
    'vlvtslbq': {
      logo: 'http://hapoel.co.il/sites/default/files/vlvtslbq.png',
      label: 'ולוצלאבק'
    },
    'pv_vrtz': {
      logo: 'http://hapoel.co.il/sites/default/files/pv_vrtz.jpg',
      label: 'פו אורטז'
    }
  }
};