function palindroma(word) {

    let reverse = word.split("").reverse().join("")

    if (word == reverse) {
        console.log(`La parola ${word} è palindroma.`)
    }

    else {
        console.log(`La parola ${word} non è palindroma.`)
    }
}

let promptWord = prompt("Inserisci qui la tua parola");

palindroma(promptWord);


