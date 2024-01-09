function monthDays(month, year) {
    const date = new Date(year, month);
    date.setDate(date.getDate() - 1);
    console.log(date.getDate());
}

monthDays(2, 2021)