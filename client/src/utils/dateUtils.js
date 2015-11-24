'use strict';

module.exports = {
    convertDate: function (utcVal) {
        var utcDate = new Date(utcVal);

        var date = new Date(utcDate.getTime() + (utcDate.getTimezoneOffset() * 60 * 1000));

        var day = date.getDate();
        var month = (date.getMonth() === 0) ? 1 : date.getMonth() + 1;

        return day + '/' + month;
    },
    convertTime: function (utcVal) {
        var utcDate = new Date(utcVal);

        var date = new Date(utcDate.getTime() + (utcDate.getTimezoneOffset() * 60 * 1000));

        var hours = date.getHours();
        var minutes = (date.getMinutes() === 0) ? '00' : date.getMinutes();

        return  hours + ':' + minutes;
    }
};
