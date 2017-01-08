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
