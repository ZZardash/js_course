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





