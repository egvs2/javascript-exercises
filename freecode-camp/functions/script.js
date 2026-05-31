function booWho(val){
    if(typeof(val) === 'boolean'){
        return true
    }else{
        return false
    }
}

function convertCtof(celsius){
    return celsius * (9/5) + 32;
}

function isLeapYear(year){
  if((year%4 === 0 && !(year%100 === 0)) || year%400 === 0){
    return `${year} is a leap year.`
  }else{
    return `${year} is not a leap year.`
  }
}

let year = 2000;

console.log(isLeapYear(year));

year = 1900;

console.log(isLeapYear(year));

console.log(`O dado é boleano: ${booWho(0)}`);
console.log(`Temperatura em Farenheit: ${convertCtof(50)}`);

function truncateString(str, num){
    let tamanho = str.length;
    if(tamanho > num){
        return str.slice(0, num++) + '...';
    }else{
        return str;
    }
}

let str = "Emerson gomes"

console.log(truncateString(str, 10));