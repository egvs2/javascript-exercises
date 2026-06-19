const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
}

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal
}

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
}

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
}

console.log(removeEndangeredStatus(tiger));

/*Se usar o perador in ele vai verifica o objeto e tudo que ele herdou, mas se usar hasOwnProperty ele verifica se o objeto possui uma proprieade específica que pertence a ele mesmo e que não foi herdada através do Prototype*/

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
}

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
}

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));