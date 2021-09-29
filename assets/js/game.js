var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
  console.log("Your player is still alive!");
}


var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
// You can also log multiple values at once like this
console.log(enemyName, enemyHealth, enemyAttack);


var fight = function() {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  /*Subtract the value of `playerAttack` from the value of `enemyHealth` 
  and use that result to update the value in the `enemyHealth` variable to update var enemyHealth
  leaving og unaffected (50-10=40 smuffy ATTACKED*/
  enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked. smuffy attacked Roborto. Roborto now has 40 health remaining.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
// check enemy's health, if enemyHealth is 0 or below roboto has died
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left."); //roboto can still fight
}


/* Subtract the value of `enemyAttack` from the value of `playerHealth` 
  and use that result to update the value in the `playerHealth` variable. ROBOTO ATTACKED SMUFFY*/
  playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked. ROBOTO ATTACKED SMUFFY 
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}





};

fight();