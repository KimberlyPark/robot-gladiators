// this creates a function named "fight"

//window.prompt("What is your robot's name?"); // -1
var playerName = window.prompt("What is your robot's name?");
//^captures the data, user driven

// Note the lack of quotation marks around playerName -2 shows smuffy in browser
//window.alert(playerName);// smuffy

console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);
var name = "your name";
console.log(name)


function fight() {
  window.alert("The fight has begun!");
}




// fight();