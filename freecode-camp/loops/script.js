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

function getPunctuationCount(sentence){
    let pontuacao = 0
    for(let letra of sentence){
            if(!/^[a-z0-9\s]$/i.test(letra)){
                pontuacao++;
            }
        }
    return pontuacao;
}

function getWordCount(sentence){
    let palavras = sentence.split(" ");
    console.log(palavras);

    if(palavras.length === '' || palavras[0] === ' '){
        return 0
    }else{
        return palavras.length
    }
}

let frase = "Wikipedia[c] is a free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and the wiki software MediaWiki. Founded by Jimmy Wales and Larry Sanger in 2001, Wikipedia has been hosted since 2003 by the Wikimedia Foundation, an American nonprofit organization funded mainly by donations from readers.[2] Wikipedia is the largest and most-read reference work in history.";

let vowelCount = getVowelCount("Apples are tasty fruits");
let contadorDeConsoante = getConsonantCount("Apples are tasty fruits")

console.log(`"Vowel Count: ${vowelCount}`);
console.log(`${contadorDeConsoante}`);

let contaPonto = getPunctuationCount("Wikipedia[C] volunteers, known, MediaWiki. Founded, Wikipedia, an American.[2] Wikipedia is the largest and most-read reference work in history.");

console.log(contaPonto);

let contaPalavra = getWordCount("When are you gonna start learning to code?");
let contaPalavra02 = getWordCount("");

console.log(contaPalavra);
console.log(contaPalavra02);


