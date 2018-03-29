/////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Hoisting

The variable object. 
argument object is created in context auto.  
Code is scanned for function declarations, each function being added to the Variable Object, where it is pointed to (from the Variable Object)
Code is scanned for variable declaration, and each variable is added as another property in the Variable Object, set to undefined. 

The action of adding properties to the Variable Object and setting function properties to point to the functions and var properties to be undefined to start is called 
HOISTING


//functions 
function calculateAge(year) {
    console.log(2016 - year);
}
 var retirement = function(year) {
     console.log(65 - (2016 - year));
 }

 //Variables
 console.log(age);   //prints undefined, property is added to the VO, but not assigned
var age = 23;
console.log(age);   //prints 23 since the property now has a value

function foo() {
    var age = 65;   //ONLY in this scope age is set to 65
}
//here age is still set to 23


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



//////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: The this keyword

this refers to the current scope 
rewatch lecture 22




















































