//create an object that takes name, age, country, and hobby, and returns it in a sentence.
const myProfile = { name: "Raphael", age: 25, country: "Nigeria", hobby: "Sport"};
//create the function
function displayProfile(person) {
    console.log("My name is " + person.name + ", i am " + person.age + " years old, from " + person.country + ", and i loves " + person.hobby + ".");
};

displayProfile(myProfile);