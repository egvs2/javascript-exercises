let lunches = [];

function addLunchToEnd(almoco, opcao){
  almoco.push(opcao);
  console.log(`${opcao} added to the end of the lunch menu.`);
  return almoco;
}


function addLunchToStart(almoco, opcaoInicio){
  almoco.unshift(opcaoInicio);
  console.log(`${opcaoInicio} added to the start of the lunch menu.`);
  return almoco;
}


function removeLastLunch(almoco){
  if(almoco.length == 0){
    console.log("No lunches to remove." );
  }else{
    let retirarUltimo = almoco.pop();
    console.log(`${retirarUltimo} removed from the end of the lunch menu.`);
  }
  return almoco;
}

function removeFirstLunch(almoco){
  if(almoco.length === 0){
    console.log("No lunches to remove." );
  }else{
    let retirarPrimeiro = almoco.shift();
    console.log(`${retirarPrimeiro} removed from the start of the lunch menu.`);
  }
  return almoco;
}

function getRandomLunch(almoco){
  let indiceAleatorio = Math.floor(Math.random() * almoco.length);

  if(almoco.length === 0){
    console.log("No lunches available.");
  }else{
    console.log(`Randomly selected lunch: ${almoco[indiceAleatorio]}`);
  }
}

let test = ["Pizza", "Burger", "Fries", "Salad"]

function showLunchMenu(almoco){
  if(almoco.length === 0){
    console.log("The menu is empty.");
  }else{
    console.log(`Menu items: ${almoco.join(", ")}`);
  }
}


console.log(addLunchToEnd(lunches, "Arroz"));
console.log(lunches);

console.log(addLunchToStart(lunches, "Feijão"));
console.log(lunches);

console.log(removeLastLunch(lunches));
console.log(lunches);

console.log(removeFirstLunch(lunches));
console.log(lunches);

console.log(getRandomLunch(lunches));
console.log(lunches);

console.log(showLunchMenu(test));
console.log(test);