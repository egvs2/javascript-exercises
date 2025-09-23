const person = {
    name: "Alberto",
    age: 33,
    job: "Dev",
    city: "Maceió"
};

const {job, city, ...restante} = person;

console.log(restante);
console.log(job);
console.log(city);

console.log(person.age);
console.log(person);
delete person.city;
console.log(person);

/*Acessar objetos aninhados*/

const person01 = {
    name: "Alice",
    age: 30,
    contact: {
        email: "alice@exemple.com",
        phone: {
            home: "123-456-789",
            work: "098-765-432"
        }
    }
};

console.log(`Telefone de trabalho: ${person01.contact.phone.home}`);
console.log(`Telefone de casa: ${person01['contact']['phone']['home']}`);

const person02 = {
    name: "Andréia",
    age: 27,
    addresses: [
        {type: "home", street: "123 main St", city: "Anytown"},
        {type: "work", street: "456 market St", city: "Workville"}
    ]
};

console.log(`Endereço do trabalho: ${person02.addresses[1].city}`);
console.log(person02.addresses[1]);

/*JSON.stringify() e JSON.parse()*/

const user = {
    name: "João",
    age: 30,
    isAdmin: "true"
};

const jsonString = JSON.stringify(user);
console.log(`Objeto JavaScript para string: ${jsonString}`);

const developerObj = {
    firstName: "Jessica",
    isAwesome: true,
    isMusician: true,
    country: "USA"
};

console.log(JSON.stringify(developerObj, ["firstName", "country"]));
console.log(JSON.stringify(developerObj, null, 2));

const jsonString02 = '{"name": "Jonh", "age": 30, "isAdmin": true}';

const userObj = JSON.parse(jsonString02);

console.log(userObj);

console.log("Usar o for ...of com iteráveis")

let it = ["Maria", 4, "João", "Kleber"];

for(let i of it){
    console.log(i);
}

console.log("*** Usar o for in para iterar sobre objetos ***")
for(let j in developerObj){
    console.log(j);
}

for(let k in developerObj){
    console.log(`${k}: ${developerObj[k]}`);
}

let person03 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};

console.log("*** Iterar sobre objetos aninhados ***");

/*Função para testar se é um objeto */
function isObject(obj){
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}
for (let prop in person03) {
    if(isObject(person03[prop])){
        for(let nestedProp in person03[prop]){
            console.log(`${nestedProp} : ${person03[prop][nestedProp]}`);
        }
    }else{
        console.log(`${prop} : ${person03[prop]}`);
    }
}

console.log("*** While ***");

let userInput = prompt("Digite um número entre 1  e 10");

while(isNaN(userInput) || Number(userInput) < 1 || Number(userInput) > 10){
    userInput = prompt("Digite um número valido, entre 1 e 10");
}

alert("Você digitou um número valido!");

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

outerLoop:  for(let i = 0; i < 3; i++){
    innerLoop: for(let j = 0; j < 3; j++){
        if(i === 1 && j === 1){
            break outerLoop;
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

