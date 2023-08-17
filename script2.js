const persons = [];

const personId = document.getElementById("personId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
addPerson.onclick = (e) => {
  const person = new Person(
    personId.value.trim(),
    firstName.value.trim(),
    lastName.value.trim(),
    age.value.trim()
  );
  if (persons.findIndex((item) => item.id === person.id) !== -1) {
    alert(`This ID: ${person.id} is already in the list!`);
  } else {
    persons.push(person);
    // const li = document.createElement("li");
    // const text = document.createTextNode(
    //   `ID: ${person.id}, First name: ${person.firstName}, Last name: ${person.lastName}, Age: ${person.age}`
    // );
    // li.append(text);
    const li = createElement(
      `ID: ${person.id}, First name: ${person.firstName}, 
    Last name: ${person.lastName}, Age: ${person.age}`,
      "li"
    );
    personsList.append(li);
  }
}

calcStats.onclick = function () {
  let age = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
  const h3avg = createElement(`Avg: ${age.toFixed(1)} `, "h7");
  age = persons.reduce((min, p) => min > p.age ? p.age : min, persons[0].age);
  const h3min = createElement(`Min age: ${age} `, "h7");
  age = persons.reduce((min, p) => min < p.age ? p.age : min, persons[0].age);
  const h3max = createElement(`Max age: ${age} `, "h7");
  stats.append(h3avg, h3min, h3max);
}

function createElement(text, tag) {
  const element = document.createElement(tag);
  const textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}

function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = +age;
}
