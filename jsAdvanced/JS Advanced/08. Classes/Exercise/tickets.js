function manageTickets(ticketInfos, sortCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    ticketInfos = ticketInfos.map(info => {
        let [destination, price, status] = info.split('|');
        return new Ticket(destination, Number(price), status);
    })

    ticketInfos.sort((a, b) => {
        if (sortCriteria === 'price') {
            return Number(a[sortCriteria]) - Number(b[sortCriteria]);
        }
        return a[sortCriteria].localeCompare(b[sortCriteria]);
    });

    return ticketInfos;
}

//TESTING
let sortedTickets = manageTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')

console.log(sortedTickets);