"use strict";
const dayOfWeek = (day) => {
    let WeekDays;
    (function (WeekDays) {
        WeekDays[WeekDays["Monday"] = 1] = "Monday";
        WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
        WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
        WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
        WeekDays[WeekDays["Friday"] = 5] = "Friday";
        WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
        WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
    })(WeekDays || (WeekDays = {}));
    const entries = Object.entries(WeekDays);
    let found = false;
    entries.forEach(([key, value]) => {
        if (key === day) {
            found = true;
            console.log(value);
        }
    });
    if (!found) {
        console.log('error');
    }
};
dayOfWeek('Saturday');
//# sourceMappingURL=dayOfWeek.js.map