const persons = [];
//click Add person => add unique person to array persons and add person to
//ordered list id="personsList"
const personId = document.getElementById("personId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addButton = document.getElementById("addPerson");
const personsList = document.getElementById("personsList");
const calcStats = document.getElementById("calcStats");

const stats = document.getElementById("stats");
const div = document.createElement("div");

addButton.onclick = addPersons;
calcStats.onclick = getStats;

//click Get stats => add after <h2>Stats</h2>: average age, min age, max age

function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = +age;
}

function addPersons() {
  let textId = personId.value.trim();
  let textFname = firstName.value.trim();
  let textLname = lastName.value.trim();
  let textAge = age.value.trim();
  if (textId !== "" && textFname !== "" && textLname !== "") {
    const newPerson = new Person(textId, textFname, textLname, +textAge);
    if (findPerson(persons, newPerson.id) === -1) {
      persons.push(newPerson);
      console.log(newPerson);
      const personList = document.createElement("li");
      for (i in newPerson) {
        personList.append(document.createTextNode(newPerson[i] + " "));
      }
      personsList.appendChild(personList);
    } else {
      alert(`ID ${textId}: already exists`);
    }
  }
}

function findPerson(personsArray, id) {
  for (let i = 0; i < personsArray.length; i++) {
    if (personsArray[i].id === id) {
      return i;
    }
  }
  return -1;
}

function getStats() {
  let res = 0;
  res = persons.reduce((acum, p) => (acum += p.age / persons.length), 0);
  let allAges = persons.map((persons) => persons.age);
  const minAge = Math.min(...allAges);
  const maxAge = Math.max(...allAges);
  div.innerHTML =  (`Average age: ${res} Min age: ${minAge} Max age: ${maxAge}`);
  stats.appendChild(div);
}
