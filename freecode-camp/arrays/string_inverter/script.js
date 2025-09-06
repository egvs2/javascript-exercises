function reverseString(frase){
    let inverter = frase.split('').reverse().join('');
    return inverter;
}

console.log(reverseString("hello"));