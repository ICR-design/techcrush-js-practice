//a function using the trim method to erase extra white space
function formatName(firstName, lastName){
    let first = firstName.trim();
    let last = lastName.trim();

    first = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();

    last = last.toUpperCase();

    return `${last}, ${first}`;
}

console.log(formatName(' Raphael ', ' Ibe '));

