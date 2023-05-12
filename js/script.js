const travelKm = parseInt(prompt("Quanti chilometri devi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));

let ticketPrice = travelKm * 0.21;
let discountType = "Nessuno sconto applicato";

if(userAge < 18){
    const ticketDiscount = (20 / 100) * ticketPrice;
    ticketPrice -= ticketDiscount;
    discountType = "Minorenne -20%";
} else if(userAge > 65){
    const ticketDiscount = (40 / 100) * ticketPrice;
    ticketPrice -= ticketDiscount;
    discountType = "Over 65 -40%";
}

ticketPrice = ticketPrice.toFixed(2);

document.getElementById('travel-km').innerHTML += travelKm;
document.getElementById('user-age').innerHTML += userAge;
document.getElementById('final-price').innerHTML += ticketPrice;
document.getElementById('discount-type').innerHTML += discountType;