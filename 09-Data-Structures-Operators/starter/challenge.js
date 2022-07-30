const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};



// Challenge 3 


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// task 1
const events = [...new Set ([gameEvents.values()])];
console.log(events);

// task 2
gameEvents.delete(64)
console.log(gameEvents);

// task 3 
console.log(`An event happend, on average ,every ${90 / gameEvents.size} minutes`);

// task 4

for(const [min,event] of gameEvents){
  const half = min <= 45 ? 'First' : "Second";
  console.log(
    `[${half} HALF] ${min} : ${event}`
  );
}







  
// CHALLENGE 1


// Task 1

// const [players1,players2] = [...game.players]
// console.log(...players1);
// console.log(...players2);


// Task 2

// const [gk,...fieldPlayers] = players1;

// console.log(`GK POSITION ${gk}` , fieldPlayers);

// Task3 

// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// Taks 4
// const players1Final = [...players1,...['Thiago','Perisic','Countinho']]
// console.log(players1Final);

// Task 5

// const {
//     odds:{team1,x : draw, team2}
// } = game;
// console.log(team1,draw,team2);

// Task 6

// const printGoals = function(...players){
//     console.log(`${players.length} goals were scored`);
// }

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski')
// printGoals(...game.scored)

// Task 7

// team1 < team2 && console.log('Team 1 is likely to win');
// team1 > team2 && console.log('Team 2 is likely to win');


// Challenge 2
// Task 1


// for(const [reqem,qoal] of game.scored.entries()){
//   console.log(`Goal ${reqem + 1} ${qoal}`);
// }

// Task 2

// const odds = Object.values(game.odds);
// let sum = 0;
// let average = 0 ;
// for(const odd of odds){
//   sum = sum + odd;
//   average = sum / odds.length;
// }
// console.log(sum);
// console.log(average);


// Task 3

// for(const [team,odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);

// }