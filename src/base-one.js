var person = {};
person.name = "sddtc";
console.log(person.name);

var anotherGuy = "pipi";
anotherGuy.name = "cong";
console.log(anotherGuy.name); //undefined

function setName(people) {
    people.name = "chief white";
    people = {};
    people.name = "sddtc";
}

var friend = {};
setName(friend);
console.log(friend.name);

if(true) {
    var color = "orange";
}

console.log(color);

function add(number1, number2) {
    var sum = number1 + number2;
    return sum;
}

var r = add(10, 20);
console.log(r);
console.log(sum);
