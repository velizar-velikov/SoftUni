function vacationBookList(input){
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysForBook = Number(input[2]);

    let hoursForBook = bookPages / pagesPerHour;
    let hoursreadingPerDay = hoursForBook / daysForBook;

    console.log(hoursreadingPerDay);
}
vacationBookList(["212 ","20 ","2 "])