
var database = [
  {
	username: 'Cosmin',
	password: 'abcd01234'
  },

  {
  	username: 'Andrei',
	password: 'zerotomastery'
  },

  {
  	username: 'Sally',
	password: '1234'
  }
];

var newsfeed = [
  {
	username : 'Serban',
	timeline : 'So tired I need all the coffee in the world'
  },
  {
      username : 'Mihai',
	  timeline : 'I like pills'
  }
];

var userName = prompt("What's your username?");
var userPassword = prompt("What's your password?");

function isUserValid(username, password){
	for (var i=0; i<database.length; i++){
	   if(database[i].username === username &&
	  	  database[i].password === password){
          return true;
      }
     }
   return false;
	}

function signIn(username, password){
	console.log(isUserValid(username,password));
	if(isUserValid(username,password)){
		console.log(newsfeed);
	}
	else {
		alert('Wrong username or password')
	}
	}

signIn(userName,userPassword);
