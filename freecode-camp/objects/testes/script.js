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


