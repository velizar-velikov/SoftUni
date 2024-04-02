const dayOfWeek = (day: string): void => {
    enum WeekDays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    const entries = Object.entries(WeekDays);
    let found: boolean = false;
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
