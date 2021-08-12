//write an if statement to prevent null or blank from running
//add rule to skip function to allow it to run with all variants of capitalization
//add numbers to the selectors of the shop function for ease of selection
//add math random to the fight order
//add a cache for hte high score --- use web storage API for local storage
//fight function
var fightOrSkip =function() {
    //ask if the player wants to fight or skip
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    // contitional Recursive Function Call
    promptFight = promptFight.toLowerCase();
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerInfo.money for skipping
            playerInfo.money = playerInfo.money - 10;
            //return true if player wants to skip
            return true;
        }
        return false;
    }

}
var fight = function (enemy) {
    //repeat and execute as long as the enemy robot is alive
    while (enemy.health > 0 && enemy.health > 0) {
        //ask if the player wants to fight or skip
        if (fightOrSkip()){
        //if true, leave the fight by breaking the loop
        break;
    }

        // remove enemeys health by subtracting the amount set as playerInfo.attack var
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died ');
            //award with money for winning
            playerInfo.money = playerInfo.money + 20;
            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + ' health left. ');
        }

        //remove player health by subtracking the amount set as enemy.attack var
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        //check players health    
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died ");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left. ");
        }
    }
};

//function to start a new game
var startGame = function () {
    //reset player stats
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        //if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
            window.alert('Welcome to Robot Gladiators Round ' + (i + 1));
            //pick new enemy to fight based on array og enemy.names
            var pickedEnemyObj = enemyInfo[i];

            //reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            //pass the pickedenemy.name var value into fight function, where it wll assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
            //if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask player if they want to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
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
var endGame = function () {
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
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
var shop = function () {
    //ask player what they want to do
    var shopOptionPromt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make your choice."
    );
    //use switch to carry out the action
    switch (shopOptionPromt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            //do nothing, so the function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop()again to force player to pick a valid option
            shop();
            break;
    }
};
//function to generate a random number
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
//function to set name
var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};
//Palyer info/variables
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!")
        }
    }
};
var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
//start the game when the page loads
startGame();


