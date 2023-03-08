let person = {
    name : "6",
    age : 1,
    height : 80,
    weight : 30
};



console.log(person.name);
console.log(person['age']);

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys, values);

keys.forEach((key) => {
    console.log(key, person[key]);
});


console.log(person);
console.log("The object is " + person);
console.log("The object is %o", person);

let jsonText = JSON.stringify(person);
console.log(jsonText);
console.log(typeof jsonText);

let p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);


