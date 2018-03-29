////Lecture 56 of Section 5
//////  Objects and Functions, which are actually Objects

// Passing functions as arguments
var years = [1990, 1984, 1994, 2001, 2013];

//Desire: write a function that takes an array, does calculations, and outputs a new array
function arrayCalc(arr, fn) { // input: array of years, a callback function
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(y) {  //callback function
    return 2018 - y;
}

console.log(arrayCalc(years, calcAge));

function maxBPM(y) {
    return 206.9 - (0.67 * calcAge(y));
}
console.log(arrayCalc(years, maxBPM));


//Lecture 57 Section 5: First Class Functions: functions return functions
/////////////////////////////
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you plese explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

//Create objects that will ask certain job questions
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

//Asks job questions to specific people
teacherQuestion('John');
designerQuestion('Mark');

//calls the first class function, then gives the parameters to the SCFunction
interviewQuestion('teacher')('Mark');


////////////////////////////////////////////////////////////////////////////////
// Lecture 58 Section 5
//   IIFE: Immediately Invoked Function Expressions

//Obsolete way of it
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//IIFE way!
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// Wrapping a statement (i.e. the function declaration) in parentheses forces JS
//   to treat it as an expression instead. 

//Benefit of IIFE: 
//  Creates a new scope, guaranteeing DATA PRIVACY
//important

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//Lecture 59 of Section 5
//  Closures                /////////////////////////////////////////////////////////

function retirement(retirementAge) {
    //for the purpose of explaining closures
    var a = ' years left until retirement.';
    //
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

//Using a FCF
var retirementUS = retirement(66);
//
retirementUS(1994);
// these are the same
retirement(66)(1994);
//

//The anonymous function uses vars that are declared outside of the function, 
//  and in fact within a FCF that has already finished .exe

//Basically: AN INNER FUNCTION ALWAYS HAS ACCESS TO THE VARIABLES DEC'D WITHIN AN OUTER FUNCTION

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

(function newInterview(job) {
    return function(name) {
        switch(job) { //uses job var, which is declared in the outer function
            case 'designer': console.log('Yo, ' + name + ' what is UX design?');
        }
    }
});
 
 //much cleaner. 
 
 
//Lecture 58 Section 5 ////////////////////////////////////////////////////////////////////
 //   Bind Call Apply
 
var john = {
    name:'john',
    age:26,
    job:'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
        else if (style === 'friendly') {
            console.log('Hey! [autorespondermessage]');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// CALL
//  Method Borrowing ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
john.presentation.call(emily, 'friendly', 'afternoon');

// APPLY
//  allows redefining of function args?? ??????????????????????????
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// BIND
//   Currying ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   bind returns a function with the args bound to certain values
// bind must ALWAYS start with the this keyword or calling object
var johnFriendly = john.presentation.bind(john, 'friendly');
//, here, it's bound with the john object and the first parameter 'friendly'
/////May also do this for callback functions
var dostuff = function(thing, func) {
    var array = [];
    thing *= thing;
    for(var i = thing; i>1; i--){
        array.push(func(thing));
    }
    return array;
}
 function root(e) {
     return Math.sqrt(e);
 }

var dostufflocked = dostuff(3, root.bind(this, 16));
console.log(dostuff(3, root));  //regular execution
console.log(dostufflocked);    //bound execution to use 16 for the root(input).