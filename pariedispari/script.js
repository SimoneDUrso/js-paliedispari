function numeroComputer() {
    return Math.floor(Math.random() * 5 + 1);
}

function comparazione(numeroUtente, numeroComputer) {
    let somma = numeroUtente + numeroComputer
    if (somma % 2 != 0) {
        numeroPari = false;
    }
}

let pariDispari = prompt("scegli 'PARI' oppure 'DISPARI' ");
let numeroUtente = parseInt(prompt("Scegli un numero che va da '1' a '5' "));

let numeroPc = numeroComputer();
console.log(numeroPc)

let numeroPari = true;

comparazione(numeroUtente, numeroPc);

if ((pariDispari === "pari" && numeroPari == true) || (pariDispari === "dispari" && numeroPari == false)) {
    console.log("HAI VINTO!")
}

else {
    console.log("Hai perso...")
}
