//Lecture: Objects
/*
var array = [1, 2, "bean"];
console.log(array);

var obj = {
    name: "Michael",
    surname: "Tinning",
    yearOfBirth: 1994,
    isMarried: false
};

console.log(obj.name); // access the name object
console.log(obj['surname']); //access the surname object
//equivalent

var a = 'isMarried';
console.log(obj[a]); //outputs the isMarried object 

var other = new Object();
other.name = "Andrea";
other.isObj = true;
other.other = new Object();  //object as an object to a variable object
other.other.name = "Mikhol";
other.isMarried = false;
console.log(other);

//using functions and objects
obj.calculateAge = function() {
    return 2017 - this.yearOfBirth;  //THIS keyword!
}
console.log(obj.calculateAge());

obj.age = obj.calculateAge(); //good, but...

obj.calculateAge = function() {
    this.age = 2017 - this.yearOfBirth;
}
obj.calculateAge();
console.log(obj.age);
*/


//Lecture.loops
//for loops
/*
for(var i = 49;i<441;i = Math.pow((Math.sqrt(i)+1),2)) {
    console.log(i); //Prints squares of 7 to 20
}
*/

//Code challenge 2
/*
Create an array with birth years
Fill an empty array from that array
Create a function printFullAge which outputs an array af booleans if FullAge (18+)
*/

var birthYear = [1994, 1996, 2004, 2010, 1982, 2015];
var empty = [];
for(var i = 0; i<birthYear.length; i++) {
    empty[i] = birthYear[i];
}
console.log("Original " + birthYear);
console.log("Empty " + empty);

function printFullAge(b) {
    var full = [];
    for(var i = 0; i<b.length;i++) {
        if(2017-b[i] < 18) 
            full.push(false);
        else
            full.push(true);
    }
    console.log(full);
}
printFullAge(birthYear);