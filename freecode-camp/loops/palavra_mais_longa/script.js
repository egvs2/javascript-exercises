function findLongestWordLength(frase){
    let novaFrase = frase.split(" ");
    let maior = 0

    for(let palavra of novaFrase){
        if(palavra.length > maior){
            maior = palavra.length
        }
    }
    return maior
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

