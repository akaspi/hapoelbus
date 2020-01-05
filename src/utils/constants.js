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
      logo: 'https://www.proballers.com/api/getTeamLogo?id=605&width=300'
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
    'haifa': {
      logo: 'https://upload.wikimedia.org/wikipedia/he/thumb/f/fd/HaifaBc.svg/245px-HaifaBc.png',
      label: 'מכבי חיפה'
    },
    'nymburk': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=967&width=160',
      label: 'נימברוק'
    },
    'AEK': {
      logo: 'https://banner2.cleanpng.com/20181120/qyl/kisspng-aek-athens-f-c-aek-b-c-greece-national-football-5bf49c2ca70343.4958042115427574206841.jpg',
      label: 'אאק אתונה'
    },
    'bamberg': {
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/62/Brose_Bamberg_logo.png',
      label: 'באמברג'
    },
    'fuenlabrada': {
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGkUwbKVtTiOJKICV5TxBH2la-sMKLnlxfc3Ojtn0V_e2raIG&s',
      label: 'פואנלברדה'
    },
    'lietkabelis': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=647',
      label: 'ליטקבליס'
    },
    'dijon': {
      logo: 'https://www.basketeurope.com/wp-content/uploads/2018/03/JDA.png',
      label: 'דיז׳ון'
    },
    'entwerp': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=427',
      label: ' אנטוורפ'
    },
    'neptunas': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=653',
      label: 'נפטונאס'
    },
    'tenerife': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=917',
      label: 'טנריף'
    },
    'rasta': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=2025',
      label: 'ראסטה וכטה'
    },
    'vlvtslbq': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=588',
      label: 'ולוצלאבק'
    },
    'pv_vrtz': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=2',
      label: 'פו אורטז'
    },
    'burgos': {
      logo: 'https://www.proballers.com/api/getTeamLogo?id=909',
      label: 'בורגוס'
    },
    'bendirma': {
      logo: 'https://www.34volt.com/images/haber-baslik/teksut-bandirma-bk-nin-yeni-isim-sponsoru-oldu-1996479.jpg',
      label: 'בנדירמה'
    }
  }
};
