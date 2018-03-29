// ES6 and ES2015
//ES 2016, the up-and-coming

//////////////////////////////////////////////////
//      Vars, Blocks, IIFE, Strings
//////////////////////////////////////////////////

//LET and CONST
var nameES5;
var ageES5;

nameES5 = 'Jane Smith';
ageES5 = 23;
console.log(nameES5);

//let //like the old var
//const  //immutable object

const nameES6 = 'Jane Smith'; //const must be declared at initialization
let ageES6;
nameES6 = 'Jane Smith';   //cannot change, sends err
nameES6 = 'Jane Miller';  //cannot change, sends err

function driversLicense(passedTest) {
    if(passedTest) {
        let firstName = 'John'; //let also is not undefined before declaration, but unreferenced, and will send an err rather than undef
        const yearOfBirth = 1990;
        
    }
    //Unable to do this, the vars are only defined in the BLOCK SCOPE
    //Vars are defined in the function scope in comparison
    console.log(firstName + ', born in' + yearOfBirth + ', is now officially allowed to drive a car');
}


//Data privacy previously required IIFEs, Immediately Instantiated Function Expression, but
//ES6 already has data privacy, so a new block scope is enough to ensure privacy
//Because block scope defines access ability in ES6

/*
    TEMPLATE LITERALS in ES6 using ` instead of ' 
    console.log(`This is ${firstName} ${lastName}`);
    done, outputs 'This is John Smith' easily
    also  (`He is ${calcAge(yearOfBirth)}`) works as well
*/


//STRINGS
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('n'));
//gives false, is Case Sensitive
//  also       .endsWith('')
//              .includes('')
//              .repeat(n)    also can be called by a template literal



//////////////////////////////////////////////////
//      Arrow Functions, Destructors
//////////////////////////////////////////////////

const ages = years.map(el => 2016 - el);
//These two things do the same thing
var ages5 = years.map(function(el) {
    return 2016-el;
});

//uses two args and template literals to output the function
let ages6 = years.map((el, index) => `Age element ${index+1}: $2016-el}.`);
 //also write arrow functions with curly braces to make an actual function scope


//arrow functions preserve the `this` keyword from the above scope
// i.e. a calling function with an arrow function within still references the same `this` reference
{
    callback: function() = {
        stuff with an arrow Function
    }
     
    callback: () => {
        doesn't work because the arrow function now uses the global this instead of the function scope this keyword
    }
}


// fun fact!
//can bind the this keyword using .bind(this)
