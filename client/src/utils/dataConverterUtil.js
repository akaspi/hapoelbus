'use strict';

var gamesConstants = require('../constants/gamesConstants');
var translationMap = require('./dataTranslationMap');

module.exports = {
    convertDate: function (utcDate) {
        var date = new Date(utcDate);

        var day = date.getDate();
        var month = (date.getMonth() === 0) ? 1 : date.getMonth() + 1;

        return day + '/' + month;
    },
    convertTime: function (utcDate) {
        var date = new Date(utcDate);

        var hours = date.getHours();
        var minutes = (date.getMinutes() === 0) ? '00' : date.getMinutes();

        return  hours + ':' + minutes;
    },
    convertGameStatus: function (gameStatus) {
        return translationMap.GAMES.STATUS[gameStatus];
    },
    convertVSID: function (vsid) {
        return translationMap.GAMES.VSID[vsid];
    }
};
