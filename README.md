# js
Javascript cheatsheet etc.

Before using any new ECMAScript feature etc. it is good practice to see if the browser is compatible yet: https://caniuse.com/

js types:
1. Number
2. String
3. Boolean
4. Undefined
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
 ```
var todos = [
	"clean room",
	"study js",
	"be nice",
];
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
	console.log(i);
}

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

var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);
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
// Listen to events!
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
