//Display code and ask if they want to play again 
/* 
-When the player is defeated or there are no more enemies call the endGame() function that:
    - Alerts the players total stats
    -asks the player if they want to go again
    -If yes, call startGame()
//Ask if they want to go to the store
-After the player skips or defeats an enemy (and thee are still more robots to fight)
    -Ask if they want to shop
    -if no continue as normal
    -if yes call the shop() function
    -int the shop() function ask if they want to refil health, upgrade attack , or leave
//In the store ask if they want to REFIL health, UPGRADE attack, LEAVE the store
    0if refil subtract money points and increase healt
    -if upgrade subtract money and increase attack
    -if leave alert goodye and exit the function
    -if any other invalid option call shop() again
    */

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
//fight function
var fight = function (enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while (enemyHealth > 0 && enemyHealth > 0) {
        //ask if the player wants to fight or skip
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemeys health by subtracting the amount set as playerAttack var
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died ');
            //award with money for winning
            playerMoney = playerMoney + 20;
            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + ' health left. ');
        }

        //remove player health by subtracking the amount set as enemyAttack var
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        //check players health    
        if (playerHealth <= 0) {
            window.alert(playerName + " has died ");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
    }
};

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        //if player is still alive, keep fighting
        if (playerHealth > 0) {
            //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
            window.alert('Welcome to Robot Gladiators Round ' + (i + 1));
            //pick new enemy to fight based on array og enemyNames
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            //pass the pickedEnemyName var value into fight function, where it wll assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        //if player is not alive, stop game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    //after teh loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};
//fuction to end the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert ("You've lost your robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
    //start the game when the page loads
    startGame();


