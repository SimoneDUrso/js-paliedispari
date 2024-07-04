// METODO CON IL REVERSE

// function palindroma(word) {

//     let arrayVuoto = []; 
//     let reverse = word.split("").reverse().join("")

//     if (word == reverse) {
//         console.log(`La parola ${word} è palindroma.`)
//     }

//     else {
//         console.log(`La parola ${word} non è palindroma.`)
//     }
// }

// let promptWord = prompt("Inserisci qui la tua parola");

// palindroma(promptWord);

// ----------------------------FINE METODO CON IL REVERSE------------------


// ----------------------------METODO CON IL FOR---------------------
function palindroma(word) {
    let strVuoto = ('');

    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
        strVuoto += (word[i]);
    }

    console.log(strVuoto);

    if (strVuoto === promptWord) {
        console.log("è una parola palindroma")
    }
    else {
        console.log("non è una parola palindroma")
    }
}

let promptWord = prompt("Inserisci qui la tua parola");
palindroma(promptWord);






