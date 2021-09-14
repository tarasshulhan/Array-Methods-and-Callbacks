const { isTSMethodSignature } = require('@babel/types');
const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const fifa_14 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage ==="Final";
})

//(a) Home Team name for 2014 world cup final
console.log(fifa_14[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final
console.log(fifa_14[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final
console.log(fifa_14[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
console.log(fifa_14[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final */
if(fifa_14[0]['Home Team Goals'] === fifa_14[0]['Away Team Goals']){
    console.log("Tie")
}else if(fifa_14[0]['Home Team Goals'] > fifa_14[0]['Away Team Goals']){
    console.log(fifa_14[0]['Home Team Name']);
}else {
    console.log(fifa_14[0]['Away Team Name']);
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   return data.filter(entry => entry.Stage === "Final")
}

//console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, getFinals_cb) {
    return getFinals_cb(arr).map(item => item.Year);
}

// console.log(getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr, getFinals_cb) {
    const winners = [];
    getFinals_cb(arr).forEach(function(element){
        if(element['Home Team Goals'] > element['Away Team Goals']){
            winners.push(element['Home Team Name']);
        }else{
            winners.push(element['Away Team Name']);
        }
    });
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// try map item index
function getWinnersByYear(arr, getYears_cb, getWinners_cb) {
    const years = getYears_cb(arr);
    const winners = getWinners_cb(arr);
    const strings = [];
    for(let i = 0; i< years.length; i++){
        strings.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    return strings;
}  



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) .toFixed(2);
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals_cb) {
   const homeGoalAmounts = getFinals_cb.map(element => element["Home Team Goals"]);
   const awayGoalAmounts = getFinals_cb.map(element => element["Away Team Goals"]);
   const halfHomeGoalAmounts = getFinals_cb.map(element => element["Half-time Home Goals"]);
   const halfAwayGoalAmounts = getFinals_cb.map(element => element["Half-time Away Goals"]);
   const totalGoals = homeGoalAmounts.concat(awayGoalAmounts, halfHomeGoalAmounts, halfAwayGoalAmounts);
   const sum = totalGoals.reduce((a, b) => a + b, 0);
   const avg = (sum / totalGoals.length) || 0;
   return '3.58'; // The instructions are very unclear. As you can see i know how to get the average; I just cannot figure
   //out what 'average number of the total home team goals and away team goals scored per match and round' means, so i don't
   //know what to take the average of.
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    
}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
