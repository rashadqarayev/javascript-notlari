// Challange 1 Start

// const johnMass  = 85;
// const johnHeight = 1.176;

// const markMass = 95;
// const markHeight  = 1.88;

// const johnBMI  = johnMass  / (johnHeight ** 2);
// const markBMI = markMass  / (markHeight ** 2)
// console.log(johnBMI , markBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// Challange 1 End

// Challange 2 Start

// const johnMass = 85;
// const johnHeight = 1.76;

// const markMass = 95;
// const markHeight = 1.88;

// const johnBMI = johnMass / (johnHeight * johnHeight)
// const markBMI = markMass / (markHeight * markHeight)

// console.log(markBMI, johnBMI);
// if(markBMI > johnBMI){
//     console.log("Mark's BMI is higher than John's");
// }else{
//     console.log("John BMI is highter than Mark's");
// }

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// }else{
//     console.log(`John BMI (${johnBMI}) is higher than Mark's BMI(${markBMI})`);
// }

// Challange 2 End

// Challange 3 START


// const dolphinsFirstScore1  = 96;
// const dolphinsSecondScore1  = 108;
// const dolphinsThirdScore1  = 89;

// const koalasFirstScore1  = 88;
// const koalasSecondScore1  = 91;
// const koalasThirdScore1  = 110;

// const dolphinsAverageScore = (dolphinsFirstScore1 + dolphinsSecondScore1 + dolphinsThirdScore1) / 3;

// console.log(`The Average Score of Dolphins is ${dolphinsAverageScore}`);

// const koalasAverageScore  = (koalasFirstScore1 + koalasSecondScore1 + koalasThirdScore1) / 3;

// console.log(`The Average Score of Koalas is ${koalasAverageScore}`);

// if(dolphinsAverageScore > koalasAverageScore){
//     console.log('Winner is Dolphins Team');
// }else if(dolphinsAverageScore === koalasAverageScore){
//     console.log('Winner is Both Team');
// }else if(dolphinsAverageScore < koalasAverageScore){
//     console.log('Winner is Koalas Team');
// }

// BONUS CHALLANGE

// const dolphinsFirstScore2  = 97;
// const dolphinsSecondScore2  = 112;
// const dolphinsThirdScore2  = 80;


// const dolphinsAverageScore2 = (dolphinsFirstScore2 + dolphinsSecondScore2 + dolphinsThirdScore2) / 3;

// const koalasFirstScore2  = 109;
// const koalasSecondScore2  = 95;
// const koalasThirdScore2  = 50;

// const koalasAverageScore2  = (koalasFirstScore2 + koalasSecondScore2 + koalasThirdScore2) / 3;

// const minimumScore  = 100;

// if((dolphinsAverageScore2 > koalasAverageScore2) && (dolphinsAverageScore2 > minimumScore)){
//     console.log('Winner is Dolphins Team');
// }else if((dolphinsAverageScore2 === koalasAverageScore2) &&  (dolphinsAverageScore2 > minimumScore && koalasAverageScore2 > minimumScore)){
//     console.log('Winner is Both Team');
// }else if((dolphinsAverageScore2 < koalasAverageScore2) && (koalasAverageScore2 > minimumScore)){
//     console.log('Winner is Koalas Team');
// }else{
//     console.log('No Teams Wins The Trophy');
// }

// Challange 3 END

// Challange 4 Start



let bill  = 275;

// const  tip = bill >=50 && bill <= 300 ? `Tip is ${bill * 0.15}`: `Tip is ${bill * 0.2}` ;
// console.log(tip);
const tip = bill >50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;
console.log(`The bill was ${bill}, the tip was ${tip}, and total value is ${bill + tip}`);


