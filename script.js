console.log("Hello World!");

//------------COMMENT LINE------------
//In-Line Comment
var number = 5;

/*
Multi-Line Comment
12345
*/

//------------DATA TYPES------------

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

var name = "John"; //Could change from everywhere
name = "Sertac";
let ourName = "Jake"; //Only use where declared
const pi = 3.14; //Non-changable

name += " is my name."; //We can add string like this
console.log(name);

lstChr = name.length - 1;
console.log(name[lstChr]);

var myArr = [[1,2,3],[4,5,6]];
console.log(myArr[0][2]);
console.log(myArr[1][2]);

var myArr2 = ["John", "Jake", "Gill"];
myArr2.shift();
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

myArr2.unshift("John");
console.log(myArr2);

//------------CHANGE HTML CONTENT & FUNCTIONS------------
function sizeBigger() {
    document.getElementById("myImage").style.width = "150";
}

function changePhrase(){
    document.getElementById("demo2").innerHTML = "This paragraph is changed";
}

//window.alert("Welcome.");

//------------STATEMENTS------------
/*
var	Declares a variable (global)
let	Declares a block variable (not accessable outside the block{})
const Declares a block constant
*/

/*
Camel Case = CamelCase
Lower Camel Case = camelCase
*/

const price1 = 5;
const price2 = 10;
//price1 = 1243; (Const variable cannot be change this creates error)

let sum = price1 + price2;

//window.alert(sum);

sum = null;
//window.alert(typeof(sum));

var sum1 = price1 + price2 + "5";
console.log(sum1);
//alert(5 >> 1);//Bitwise shift

//----------OBJECTS------------

//Object Definition

const Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue",
    fullName: this.firstName +" "+this.lastName
};

alert("Welcome\n"+Person.fullName);

//--------------STRING METHODS--------------

let text = "Hello World I'm JavaScript, JavaScript";
//Slice
let text2 = text.slice(2,5);
console.log(text2);

//Sub String
let text3 = text.substring(0,5);
console.log(text3);

//Replace
let text4 = text.replace("JavaScript", "CSS"); //Case Sensitive
console.log(text4);

let non_sens_text4 = text.replace(/javascript/i, "CSS"); //Non-Sensitive
console.log(non_sens_text4);

//Replace All
let text5 = text.replaceAll("JavaScript", "CSS");
console.log(text5);

//Upper and Lower Case
let text6 = text.toUpperCase();
console.log(text6);

let text7 = text.toLowerCase();
console.log(text7);

//Concat
let _text = "   Hello";
let _text2 = "World!    ";

let comText = _text.concat(" ", _text2);
console.log(comText); 

//Trim - Start Trim - End Trim
let trimmedText = _text.trim();
let startTrimmedText = _text.trimStart();
let endTrimmedText = _text2.trimEnd();

console.log(trimmedText);
console.log(startTrimmedText);
console.log(endTrimmedText);

//Pad Start - Pad End
var _text3 = "5";

var padded = _text3.padStart(4, "x");
console.log(padded);

var padded2 = _text3.padStart(4, "0");
console.log(padded2);

var endPadded = _text3.padEnd(4, "0");
console.log(endPadded);

//Char at - Char Code at

let TEXT = "hello";
console.log(TEXT.charAt(0));
console.log(TEXT[0]);

//Converting string to array
let array = TEXT.split("");
array[0] = "d";
console.log(array[0], array[1], array[2]);

//indexOf
let str = "Hello World!";

let indexof = str.indexOf("World!");
console.log(indexof);

let last_indexof = str.lastIndexOf("orld");
console.log(last_indexof);

//Search
search = str.search("lo Wo");
console.log(search);

//Match - Match All
console.log(str.match("llo"));
console.log(str.matchAll('o'));

//Includes
console.log(str.includes("llo")); //True
console.log(str.includes("llo", 3)); //Start at 3 (False)

//Starts With - Ends With
console.log(str.startsWith("H"));
console.log(str.endsWith("!"));

//Interpolation
var txt = "Hello";
var txt1 = "World!";

var cTxt = `${txt} ${txt1} My name is JS!`; //With BackTicks!!
console.log(cTxt);

var price = 30;
var cTxt2 = `${txt} your monthly expense is ${price * 30}`;

console.log(cTxt2);

//HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;

//Numeric Strings

let _x = "100";
let _y = "10"; 

let _z = _x + _y;
console.log(_z); //Concatenation

let _z1= _x / _y;
console.log(_z1); //Numeric Operation 

//NaN => (Not a Number) 
//Actually the type NaN is number !
var a = 100 / "Mahmut";
console.log(isNaN(a));

//Infinity(Over the limit)
var b = 5;
while (b != Infinity){ //till the number is over line
    b*=b;
    console.log(b);
} 

console.log(2/0); //Infinity
console.log(-2/0); //-Infinity

//Hexadecimal(16bit)

console.log(0xFF + 1);

number = 5;
console.log(Number.isInteger(number))
console.log(Number.isSafeInteger(number))

//------------------ARRAYS-------------------

const fruits = ["Melon","Apple","Cherry"];
fruits[0] = "Watermelon";

function printArray(x){
    for (let index = 0; index < x.length; index++)
    {
        const element = x[index];
        console.log(element);
    }
}

//Creating HTML list with array
let fLen = fruits.length;

let _txt = "<ul>";
for (let i = 0; i < fLen; i++) {
  _txt += "<li>" + fruits[i] + "</li>";
}
_txt += "</ul>"; 
/*txt = "
<ul>
    <li>Watermelon</li>
    <li>Apple</li>
    <li>Cherry</li>
</ul>";
*/

//Is Array ? 
function isArray(x){
    var isArray = Array.isArray(x);
    return isArray;
}
console.log(isArray(fruits));

//Sort
fruits.sort();
printArray(fruits);

//Reverse.
fruits.reverse();
printArray(fruits);

//---------------NUMBER METHODS---------------

//toString
var a = 312312;
a = a.toString();
console.log(typeof(a)+": "+ a);

//toExponential
var b = 3.145;
b = b.toExponential(2);
console.log("Exponential notation: "+b);

//toFixed
var c = 324123;
c = c.toFixed(2); //Zero count after comma [must be(0,100)]
console.log("Fixed: "+c);

//toPrecision
var d = 39999;
d = d.toPrecision(2);
console.log(d);

//valueOf
var e = 12312;
e = e.valueOf();
console.log(e);

//random
var _a = Math.random(); //Always return number lower than 1
console.log("Random number: "+_a);

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));

//Proper random function
function rnd(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}
/*Example:
    a = rnd(5, 10);
    a => 0,1 + 5 or 3+5 or 0,1231+5
*/

randomInt = rnd(3,77);
console.log("Random integer between 3,77: "+randomInt);

console.log("12"<"2"); //Alphabtic comparison

//-----------------SETS-----------------

const letters = new Set(["a","b","c","d"]);
letters.add("e");
letters.add("f");

var txt123 = "";
letters.forEach (function(value) {
  txt123 += value;
});

console.log(letters.values());

//-----------------MAPS-----------------

//Create a map
const cities = new Map([
    ["New York", 32],
    ["Los Angeles", 17],
    ["Boston", 22]
]);

//Add or change existing
cities.set("New York", 36);
cities.set("Istanbul", 34);

//Get
cities.get("New York"); //Returns 36

//Size
console.log(cities.size);

//Delete
cities.delete("New York");
console.log(cities.size);

//Has
console.log(cities.has("New York"));

//List all entries
let allEntries = "";
for (const x of cities.entries()){
    allEntries += x+"\n";
}

console.log(allEntries);

//-----------------TYPE CASTING-----------------

let string = "5";
let numberString = +string; //Cast with unary (+) operator

console.log(typeof(numberString));

//-----------------REGULAR EXPRESSIONS-----------------
/*Syntax
/pattern/modifiers;*/

//search()
let ads = "Hello to JS";
console.log(ads.search("JS"));

console.log(ads.search(/js/i));//Reg Ex with i(case insensitive)

//replace()
console.log(ads.replace("JS", "CSS"));
console.log(ads.replace(/js/i, "CSS"));//Reg Ex

//--------------------TRY / CATCH --------------------

try {
    adlert("No error!"); //Error caught!
    alert("No error!"); //No error keep trying.
} catch (error) {
    alert("There is an error!");
}

throw "This is too big!"; //Throw custom eror.


function catchError(){
    const message = document.getElementById("id2");
    message.innerHTML = "";
    value = document.getElementById("id1").value;
    try{
        if (value.trim() == "") throw "Empty!";
        if (isNaN(value)) throw "Not a number";
        value = Number(value);
        if (value < 5) throw "Too low.";
        if (value > 10) throw "Too high.";
    }
    catch(error){
        alert("Input is " + error);
    }
}



