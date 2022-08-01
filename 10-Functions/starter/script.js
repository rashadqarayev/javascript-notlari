'use strict';
 
const bookings = []

const createBooking = function(flightNum,numPassengers = 1 ,price = 199){
    // numPassengers ve price variablesinin hal hazirda bir deyeri olmadigi ucun , standart deyeri qebul edir.Bu ES5 de dir
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123',undefined, 300)
// undefinied yazaraq numpassengers variablesinin deyerini standart olaraq belli edrirk