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
                    "title": "",
                    "value": "TEL-AVIV"
                },
                {
                    "title": "",
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
