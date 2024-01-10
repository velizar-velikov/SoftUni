function previousDay(year, month, day) {
    const today = new Date(year, month - 1, day);
    today.setDate(today.getDate() - 1);
    console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
}

previousDay(2016, 1, 1);