# js
Javascript cheatsheet etc.

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
Prompt()
alert()
Number()

```
