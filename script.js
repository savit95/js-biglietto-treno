

// prompt per inserimento chilometri, + converte in numero
let kilometers = +prompt("Inserisci il numero di km che vuoi percorrere:");
console.log(kilometers);
// prompt per inserimento eta del passeggero, + converte in numero
let age = +prompt("Inserisci l'eta del passeggero:");
console.log(age);

let price
let reduction
let lastprice

price= 0.21 * kilometers;
console.log(price);

if(age < 18){
    reduction=20 * price/100;
    lastprice=price - reduction;
    alert(`Il prezzo del biglietto é:${lastprice}`)
    
}else if(age >= 65){
    reduction=40 * price/100;
    lastprice=price - reduction;
    alert(`Il prezzo del biglietto é:${lastprice}`)
}

alert(`Il prezzo del biglietto é:${price}`)


