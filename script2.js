var database = [
{
	username: "Shane",
	password: "supersecret"
},
{
	username: "sally",
	password: "123"
},
{
	username: "ingrid",
	password: "777"
}];

var newsfeed = [
{
	username: "Bobby",
	timeline: "So tired of this"
},
{
	username: "Sally",
	timeline: "Love life"
}];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true; 
		}
	}
	return false;
}

function signIn(username, password) {
	console.log("hello");
	console.log(isUserValid(username, password));
	if (isUserValid(userNamePrompt, passwordPrompt)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);