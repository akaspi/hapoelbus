module.exports = {
    "UserData": {
        "displayName": {
            "type": "string",
            "title": "שם מלא"
        },
        "email": {
            "type": "string",
            "title": "דוא״ל"
        },
        "isPremium": {
            "type": "boolean",
            "title": "מעוניין במנוי"
        },
        "phone": {
            "type": "string",
            "title": "טלפון"
        }
    },
    "Game" : {
        "vsid": {
            "type": "enum",
            "title": "נגד",
            "options": [
                {
                    "title": "מכבי תל-אביב",
                    "value": 'MTA'
                },
                {
                    "title": "הפועל תל-אביב",
                    "value": 'HTA'
                },
                {
                    "title": "הפועל חולון",
                    "value": 'HOLON'
                },
                {
                    "title": "הפועל אילת",
                    "value": 'EILAT'
                },
                {
                    "title": "מכבי ראשון-לציון",
                    "value": 'RISHON'
                },
                {
                    "title": "מכבי חיפה",
                    "value": 'HAIFA'
                },
                {
                    "title": "עירוני נס ציונה",
                    "value": 'NES_ZIONA'
                },
                {
                    "title": "עירוני נהריה",
                    "value": 'NAHARI'
                },
                {
                    "title": "בני הרצליה",
                    "value": 'BNEI_HASHARON'
                },
                {
                    "title": "מכבי אשדוד",
                    "value": 'ASHDOD'
                },
                {
                    "title": "מכבי קרית גת",
                    "value": 'KIRYAT_GAT'
                }
                //...
            ]
        },
        "date": {
            "type": "date",
            "title": "תאריך"
        },
        "departure": {
            "type": "time",
            "title": "שעת יציאה"
        },
        "capacity": {
            "type": "number",
            "title": "מס׳ מקומות"
        },
        "status": {
            "type": "enum",
            "title": "סטאטוס",
            "options": [
                {
                    "title": "סגור",
                    "value": 'CLOSED'
                },
                {
                    "title": "פתוח למנויים",
                    "value": 'OPEN_FOR_MEMBERS'
                },
                {
                    "title": "פתוח לכולם",
                    "value": 'OPEN_FOR_ALL'
                }
            ]
        }
    },
    "Booking": {
        "numOfSeats": {
            "type": "number",
            "title": "מס׳ מקומות"
        },
        "station": {
            "type": "enum",
            "title": "תחנה",
            "options": [
                {
                    "title": "תל אביב",
                    "value": "TEL-AVIV"
                },
                {
                    "title": "מודיעין",
                    "value": "MODIIN"
                }
                //...
            ]
        },
        "comments": {
            "type": "string",
            "title": "הערות"
        }
    },
    "Occupied": {
        "totalNumOfSeats": {
            "type": "number",
            "title": "מקומות תפוסים"
        }
    },
    "Payments": {
        "maxSeats": {
            "type": "number",
            "title": "מס׳ מנויים"
        }
    }
};
