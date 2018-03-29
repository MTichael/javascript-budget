///Lecture 51 of Section 5

//Inheritance! "Everything is an object"

//var person = new Object();  ??

//Constructor for the person Object, essentialy a class
//Inheritance applied from Object to Object to add or revamp old constructor properties. 

//Works basically like classes and inheritance, just with different names


//////////////////////////////Lecture 52 of Section 5   
//Function Constructors

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //Added later, now allows objects created in this constructor to call
    this.calculateAge = function() {console.log(2018-yearOfBirth);};
}

var john = new Person('John', 1990, 'teacher');

//What does 'NEW' actually do? 
///creates an empty object, calls the function to fill
///this pointer changes to the function scope within the scope

var jane = new Person('Jane', 1962, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// now what if we had an enormous data pool that we needed to relegate to these objects? 
///Luckily, INHERITANCE!

//Adds the sayAge function to the prototype of the Person class
Person.prototype.sayAge = function() {
    console.log("This person's age is .... A NUMBER!");
}
//May also add properties to the prototype as such
Person.prototype.lastName = "Smith";
//the above will add Smith as EVERYONE'S lastname
//this is mutable



var Gargantuan = function(effervescence) {
    this.effervescence = effervescence; //experience at the end of encounter
}
var bbg = new Gargantuan(112);
Gargantuan.prototype.health = 120;//health property
Gargantuan.prototype.shield = 30;//shield property
Gargantuan.prototype.lightatk = 4;//damage
Gargantuan.prototype.heavyatk = 15;//damage
Gargantuan.prototype.dodge = 15;//percent subtracted
Gargantuan.prototype.crit = 3;//percent
Gargantuan.prototype.hcool = 10;//sec
Gargantuan.prototype.lcool = 3;//sec

console.log(bbg.__proto__);  //get info from prototype chain



/////////////////////////////////////////////////////////////////////////////////////////
// Lecture 54 of Section 5                   Object.create method, 

//Object.create
var personProto = { 
calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher'; 
//  This method creates an empty object, so each value must be manually entered
//    This is obviously not ideal

var mike = Object.create(personProto, 
{
    name: {value: 'Mike'},
    yearOfBirth: {value: 1994 },
    job: {value: 'Storyseeker' }
});
//Object.create allows easy integration of inheritance structures

//////////////////////////////////////////////////////////////////////////////////////////////
// Lecture 55 Section 5
//Primitives vs Objects
//Prims hold data in the variable, i.e. low-level types, designated registers
//Objects create a memory space for an item, i.e. any variable on the stack

var obj = {
    name: 'John',
    age: 26
};
var ect = obj;
obj.age = 30;
console.log(obj);
console.log(ect);
//The age is NOT different between these objects because they are the same object
//  since OBjects simply have references in memory, the two refs point to the same place


