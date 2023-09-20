function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    let studentTicketCounter = 0;
    let standardTicketCounter = 0
    let kidTicketCounter = 0;
    let allTickets = 0;


    while (command !== "Finish") {
        let movieName = command;
        index++;
        let currentFreeSpaces = Number(input[index]);
        index++;
        command = input[index];
        let ticketType = command;
        let occupiedSpaces = 0;
        while (command !== "End") {
            switch (ticketType) {
                case "student": studentTicketCounter++; break;
                case "standard": standardTicketCounter++; break;
                case "kid": kidTicketCounter++; break;
            }
            occupiedSpaces++;
            index++;
            command = input[index];
            ticketType = command;
            if (occupiedSpaces === currentFreeSpaces) {
                break;
            }
        }
        allTickets += occupiedSpaces;
        console.log(`${movieName} - ${(occupiedSpaces / currentFreeSpaces * 100).toFixed(2)}% full.`);
        if (command === "Finish" || occupiedSpaces === currentFreeSpaces) {
            continue;
        }
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${(studentTicketCounter / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketCounter / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketCounter / allTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])