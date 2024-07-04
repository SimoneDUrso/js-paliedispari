function palindroma(word) {

    let reverse = word.split("").reverse().join("")

    if (word == reverse) {
        console.log(`${word} è palindroma.`)
    }

}


