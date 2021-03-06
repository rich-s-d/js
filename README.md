# js
Javascript cheatsheet etc.

Before using any new ECMAScript feature etc. it is good practice to see if the browser is compatible yet: https://caniuse.com/

js types:
1. Number
2. String
3. Boolean
4. Undefined
5. Symbol (as of ES6)
6. Null
7. Object

Comparisons:
!==
===
>=
<=
>
<

Logical operators:
|| or
&& and
! not

js Functions:
Function declaration 
```
function sayHello() {
	console.log("hello there");
}
```
Function expression.
```
var sayBye = function() { //this is an anonymous function
	console.log("bye")
}
```

js Data Structures:
Array
Object
```
array.shift(); //removes first
array.pop(); //removes last
array.push("argument"); //adds argument and returns lenght of array.
array.concat(["argument", "argument2"]); // adds the two arguments to the array.
array.sort();
```
js loops:
1. for
2. while
3. do while loop
4. ForEach (new in ECMAScript 5)
5. for of (iterate arrays) (new in ES6)
6. for in (enumerate object keys) (new in ES6)
 ```
var todos = [
	"clean room",
	"study js",
	"be nice",
];

// for
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
	console.log(i);
}

//forEach
todos.forEach(function(i) {
	console.log(i);
})
//or
function logToDos(todo, index) {
	console.log(todo, index);
}
todos.forEach(logToDos);

var counterone = 10;
while (counterone > 0) {
	console.log(counterone);
	counterone--;
}

// do while
var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);

// for of (iterate arrays)
for (item of todos) {
  console.log(item);
}

// for in (enumerate object keys)
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}
for (item in basket) {
  console.log(item); // returns glasses, books, floss
 ```

shift + enter in console.
```
// the following methods belong to the window parent object.
Prompt()
alert()
Number()
// document (DOM, a js object) is a child of window.
document //shows html document
// DOM reads and takes instructions from html and css. The JS engine, V8 for example, reads JS and gives instructions to the DOM on how to manipulate html/css.
```
DOM selectors:
```
document.getElementsByTagName();
document.querySelector(); //will retrieve the first element.
document.querySelectorAll();

//eg.
document.querySelector("li").getAttribute("random"); //will return the value of the attribute "random"
document.querySelector("li").style.background = "yellow"; //style accesses the css for this element.

// But remember seperation of concerns.
h1.className = "coolTitle"; //will apply the css class coolTitle to h1.
document.querySelector("li").classList; // provides a list of classes in li
document.querySelector("li").classList.remove("coolTitle"); //removes coolTitle that was applied.

```
// Listen to events:
```
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


button.addEventListener("click", function() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("Testing"));
	ul.appendChild(li);
});
```
ES6 (2015)
```
const
let
// Destructuring was introduced
// Template strings introduced using back ticks ``
// Arrow functions
const add = (a + b) => a + b;
```
ES7 (2016)
Includes on strings and exponants
```
const myString = "My String";
console.log(myString.includes("My")); // returns true
const twoToThePowerOfThree = 2**3; // returns 8
```
ES8 (2017)
Includes string padding, trailing commas allowed now, Object.entries and Object.values, async/await
```

```
ES10 (2019)
Includes flat(), flatMap() (flattening nested arrays), trimStart(), trimEnd() (for strings), fromEntries.
```
const array = [1, 2, 3, [4, 5, [6, 7, [8, 9]], 10], 11]
const flattenByDefaultOfOne = array.flat(); // returns [1, 2, 3, 4, 5, [6, 7, [8, 9]], 10, 11]
const completelyFlatten = array.flat(Infinity); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const myEmail = "          unitTesting@unittest.com"
console.log(myEmail.trimStart()) // returns unitTesting@unittest.com

//Turn object into array.. entries is not new, but fromEntries is.
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);
// Now back into Object..
console.log(Object.fromEntries(usersArray));
```
ES2020 
Includes BigInt, Optional Chainging Operator (?), Nullish Coalescing Operator (??)
```
typeof 1n // returns bigint (solves problem with MAX_SAFE_INTEGER, i.e., largest number that can save in binary memory)

// chaining operator ?
let weight = pokemon?.pikachu?.weight; // returns undefined if pokemon object or pikachu type do not exist rather than throwing an exception.

// nullish coalescing operator ??
let pokemon = {
  pikachu: {
    power: 0,
    height: 23,
  }
}

let power = pokemon?.pikachu?.power ?? "no power";
console.log(power) // returns 0. If || was used instead of ?? then "no power" would return, not 0.

```
Advanced functions: clojures, currying and compose.
```
```
Advanced arrays: map, filer and reduce.
```
array = [1, 2, 3, 4, 5, 6]
const multiplyArrayByTwo = array.map(x => x*2);
const filterArrayLessThanThree = array.filter(x => x<3);
const addEverythingInArrayOnTopOfAStartNumberOfTen = array.reduce((accumulator, x) => accumulator + x, 10);
```
