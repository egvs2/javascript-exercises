let num = 5

function factorialCalculator(numero){
    let result = 1
    for(let i = 1; i <= numero; i++){
        result *= i
    }
    return result
}

console.log(factorialCalculator(5));
console.log(factorialCalculator(7));