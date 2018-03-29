//Lecture: Operators
/*
var thisYear = 2017;
var birthYear = thisYear - 23;

birthYear = thisYear - 23*2;

var ageJohn = 30;
var ageMark = ageJohn;
 
ageJohn = ageMark = (3+5) * 4 - 6;
console.log(ageJohn);
console.log(ageMark);
*/

//Lecture: conditional ifelse
/*
var name = "John";
var age = 23;
var isMarried = false;

console.log( (isMarried ? name + " is totally married" : name + " is singularly alone"));

if(23 == "23")
    console.log("Two marks will have type coercion, i.e. int becomes string, are the same");
if(23 === "23") {
    console.log("Three marks excludes type coercion, meaning these are not normalized and thus are different");
}

*/

//Lecture S2:Boolean Logic and switches
/*var age = Date.now() / 1000 / 60 / 525600 ;
console.log(age.toFixed(1));
console.log(age < 20 ? "Johnboy is a teenager" : "Jonathan is a fuckin' man, man");
*/

//Code Challenge One
/*
var heights;
var age;
var p = prompt("Number of Players (max 3)?");
for (var i = 0;i < p;i++) {
    heights = Math.max(prompt("Player " + (i+1) + " height?"), heights);
    age = Math.max(prompt("Player " + (i+1) + " age?"),age);
}
console.log("The max age is " + age);
console.log("Therefore player 4 wins! >:)");
*/

//Functions, lecture 2.5
/*
function calculateAge(birthYear) {
    var age = 2017 - birthYear;
    return age;
}

console.log("My age is " + calculateAge(1994) + " years");

*/

//Lecture: Arrays!
var nameArray = ["John", "Michael", "Brendan"];
var yearArray = new Array(1975, 1994, 1987);

console.log(nameArray[0]);
console.log((nameArray[1] = "William"));

var Patrick = ["Patrick", 37, false];
Patrick.push("Damn, but he had style and class.");
console.log(Patrick[3]);

Patrick.unshift("Mr."); //Adds element at the front of the array
Patrick.push("teacher");
console.log(Patrick);
Patrick.pop();
Patrick.shift(); //Removes the first element in the array

console.log("He was number " + Patrick.indexOf(37) + "!");

//Test for an element
if(Patrick.indexOf("teacher") == -1) //returns -1 if failure
    console.log("Pat doesn't teach,,, anymore");
