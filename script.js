


let kilometers = parseFloat(prompt("Inserisci numero di KM che vuoi percorrere:"));
console.log(kilometers);

let age = parseFloat(prompt("Inserisci l'etá del passeggero:"));
console.log(age);

let price= 0.21 * kilometers;
let reduction;

if(age < 18){
    reduction=20 * price/100;
    price -= reduction;
}else if(age >= 65){
    reduction=40 * price/100;
    price -= reduction;
}

alert(`Il prezzo del biglietto é:${price.toFixed(2)}€`);





