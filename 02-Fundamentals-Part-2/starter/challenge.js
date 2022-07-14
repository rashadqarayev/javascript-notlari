// const calcAverage = (race1,race2,race3)=>{ (race1+race2 + race3)/3 }

// const scoreDolphins = calcAverage(44,23,71); 
// const scoreKoalas = calcAverage(65,65,49); 
 
// const checkWinner = function(avgDolhins,avgKoalas){
//      if(avgDolhins >= 2 * avgKoalas)
//      { console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`); }
//      else if(avgKoalas >= 2 * avgDolhins)
//      { console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`); } 
//      else{ 
//         console.log("No team wins"); 
//     } } 


// checkWinner(scoreDolphins,scoreKoalas);
// checkWinner(300,600)


// CHALLENGE 2 START

// const calcTip = (bill)=>{
//     return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(200));

// const bills = [125,555,44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(tips);

// const total = [
//     tips[0] + bills[0],
//     tips[1] + bills[1],
//     tips[tips.length-1] + bills[bills.length-1]          

// ]
// console.log(total);

// Challange 3 START

// const mark = {
//     name:"Mark",
//     weight:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi = this.weight/ (this.height * this.height);
//         return this.bmi; 
//     }
// }

// const john = {
//     name:"John",
//     weight:92,
//     height:1.95,
//     calcBMI:function(){
//          this.bmi = this.weight/ (this.height * this.height);
//         return this.bmi; 
//     }
// }

// function checkWinner() {
    
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// console.log(mark.bmi> john.bmi ? `Mark's BMI ${mark.bmi} is higher than John's BMI ${john.bmi}` : `John's BMI ${john.bmi} is higher than Mark's BMI ${mark.bmi}`);

// Challange 4

const bills = [22,295,176,440,37,105,10,1100,86,52]
const tips = []
const totals = []

const calcTip = (bill)=>{
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0; i<10;i++){
    // console.log(bills[i]);
    // console.log(`For Bill ${i+1}, tip is ${calcTip(bills[i])}`);
    tips.push(calcTip(bills[i]))
    totals.push(calcTip(bills[i])  + bills[i])
}
console.log(tips);
console.log(totals);

// CHALLANGE DEAD

// console.log(reqems);

// const reqems = []

function calcAverage(reqems){
    let sum = 0;
    for(let i = 0; i < reqems.length ; i++){
        sum = sum + reqems[i]
    }
    let average = sum / reqems.length;
    return average;
}

console.log(calcAverage(totals));

// const average  = sum / reqems.length;
// console.log(average);