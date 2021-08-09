var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")
    //ask if the player wants to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    //if player chooses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemeys health by subtracting the amount set as playerAttack var
        enemyHealth = enemyHealth -playerAttack;
        //log a resulting message to console
        console.log(
            playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining "
        );
        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died! ");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
        //remove player health by subtracking the amount set as enemyAttack var
        playerHealth = playerHealth - enemyAttack;
        //log resulting message to the console 
        console.log(
            enemyName + " attacked " + "playerName" + "." + playerName + " now has " + playerHealth + " health remaining "
            );
            if (playerHealth <=0) {
                window.alert(playerName + " has died ");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + "health left. ");
            }
    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm the player wants to quit
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping 
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}
//this calsl the functions//
fight();
