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
var fight = function(enemyName) {
  //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && enemyHealth > 0) {    
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
    enemyHealth = enemyHealth -playerAttack;
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
    }else {
        window.alert(enemyName + " still has " + enemyHealth + ' health left. ');
        }

    //remove player health by subtracking the amount set as enemyAttack var
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.' 
    );

    //check players health    
    if (playerHealth <=0) {
        window.alert(playerName + " has died ");
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + "health left. ");
        }
    }
};

//fight each enemy robot loopinf over them and fighting on at a time 
for(var i = 0; i < enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerHealth > 0) {
        //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
        window.alert('Welcome to Robot Gladiators Round ' + (i + 1));
        //pick new enemy to fight based on array og enemyNames
        var pickedEnemyName =enemyNames [i];

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

