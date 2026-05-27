function getPizzasToOrder(hoursWorked) {
    let sum = 0;

    for(let i=0; i < hoursWorked.length; i++){
    console.log(`${i}: horas trabalhadas ${hoursWorked[i]}\n\tFatias de pizza: ${Math.ceil(hoursWorked[i]/3)}`);
    if(Math.ceil(hoursWorked[i]/3) >= 2){
        sum += Math.ceil(hoursWorked[i]/3);
    }else{
        sum += 2;
    };
    console.log(`Total de fatias: ${sum}`);
  };

  return Math.ceil(sum/8);
}

function linha(){
    console.log("*".repeat(30))
}

linha();
console.log(getPizzasToOrder([8, 8, 8]));

linha();
console.log(getPizzasToOrder([1, 2, 3, 4, 5]));

linha();
console.log(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]));

linha();