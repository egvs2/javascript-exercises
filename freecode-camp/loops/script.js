function getVowelCount(sentence){
    let contaVogal = 0;

    for(let letra of sentence){
        if(/^[aeiou]$/i.test(letra)){
            contaVogal++;
        }
    }
    return contaVogal
}

function getConsonantCount(sentence){
    let contaConsoante = 0
    for(let letra of sentence.toLowerCase()){
            if(/^[a-z]$/i.test(letra) && !/^[aeiou]$/i.test(letra)){
                contaConsoante++;
            }
        }
    return contaConsoante;
}

/*let frase = "Wikipedia[c] is a free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and the wiki software MediaWiki. Founded by Jimmy Wales and Larry Sanger in 2001, Wikipedia has been hosted since 2003 by the Wikimedia Foundation, an American nonprofit organization funded mainly by donations from readers.[2] Wikipedia is the largest and most-read reference work in history.";
*/

//let vowelCount = getVowelCount("Apples are tasty fruits");
let contadorDeConsoante = getConsonantCount("Apples are tasty fruits")

//console.log(`"Vowel Count: ${vowelCount}`);
console.log(`${contadorDeConsoante}`);