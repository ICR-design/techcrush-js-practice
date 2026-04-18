//create an object
const myProfile = { name: "Raphael", age: 25, country: "Nigeria", hobby: "coding"};
//create the function
function displayProfile(person) {
    console.log("My name is " + person.name + ", i am " + person.age + " years old, from " + person.country + ", and i loves " + person.hobby + ".");
};

displayProfile(myProfile);