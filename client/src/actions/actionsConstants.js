'use strict';

var ACTIONS = {
    LOGIN: 'LOGIN',
    SOCIAL_LOGIN: 'SOCIAL_LOGIN',
    CREATE_USER: 'CREATE_USER',
    REMOVE_USER: 'REMOVE_USER',
    RESET_PASSWORD: 'RESET_PASSWORD',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    LOGOUT: 'LOGOUT',
    LOAD_AUTH_DATA: 'LOAD_AUTH_DATA',

    LOAD_USERS: 'LOAD_USERS',
    UPDATE_USER: 'UPDATE_USER',

    LOAD_GAMES: 'LOAD_GAMES',
    CREATE_GAME: 'CREATE_GAME',
    UPDATE_GAME: 'UPDATE_GAME',
    REMOVE_GAME: 'REMOVE_GAME',

    LOAD_BOOKINGS: 'LOAD_BOOKINGS',
    UPDATE_BOOKING: 'UPDATE_BOOKING',
    CANCEL_BOOKING: 'CANCEL_BOOKING',

    NAVIGATE_TO_PAGE: 'NAVIGATE_TO_PAGE',

    SHOW_DIALOG: 'SHOW_DIALOG',
    UPDATE_DIALOG_PROPS: 'UPDATE_DIALOG_PROPS',
    CLOSE_DIALOG: 'CLOSE_DIALOG'
};

module.exports = ACTIONS;