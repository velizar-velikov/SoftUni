class FlightBookingSystem {

    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0
    }

    addFlight(flightNumber, destination, departureTime, price) {

        if (this.flights.find(flightObj => flightObj.flightNumber === flightNumber) !== undefined) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }
        this.flights.push({
            flightNumber,
            destination,
            departureTime,
            price
        });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {

        if (this.flights.find(flightObj => flightObj.flightNumber === flightNumber) === undefined) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({
            passengerName,
            flightNumber
        });
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {

        const bookingIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);

        if (bookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {

        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        const sortBooksByCriteria = {
            'all': () => {
                const result = [`All bookings(${this.bookingsCount}):`];
                for (const { passengerName, flightNumber } of this.bookings) {
                    result.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return result.join('\n');
            },

            'cheap': () => {
                const cheapBookings = this.bookings.filter(booking => {
                    const flightNumber = booking.flightNumber;
                    const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
                    return flight.price <= 100;
                });
                if (cheapBookings.length === 0) {
                    return 'No cheap bookings found.';
                }
                let result = ['Cheap bookings:'];

                for (const { passengerName, flightNumber } of cheapBookings) {
                    result.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return result.join('\n');
            },

            'expensive': () => {
                const expensiveBookings = this.bookings.filter(booking => {
                    const flightNumber = booking.flightNumber;
                    const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
                    return flight.price > 100;
                });
                if (expensiveBookings.length === 0) {
                    return 'No expensive bookings found.';
                }
                let result = ['Expensive bookings:'];

                for (const { passengerName, flightNumber } of expensiveBookings) {
                    result.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return result.join('\n');
            }
        }

        return sortBooksByCriteria[criteria]();
    }
}


/*----------------------------------------------------------------------*/
//Testing
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));





