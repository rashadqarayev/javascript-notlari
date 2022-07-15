// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyaz = '23';

// const calcAge = birthYear => 203 - birthYear;

// console.log(calcAge(233));

// terminala live-server de yaza bilerik go live evezine

// PROBLEM 1

/*const tempratures = [3,-2,-6,-1,'error',9,13,17,15,14,9,5]

const caclAmplitude = (numbers)=>{
    let max = numbers[0];
    let min = numbers[0];
    for(let i = 0; i < numbers.length ; i++){
        let currentTemp = numbers[i];
        if(typeof currentTemp !== 'number') continue; 
        if(currentTemp > max) max = currentTemp;
        if(currentTemp < min) min= currentTemp ;
    }
    console.log(max,min);
    return max-min;
}



const amplitude = caclAmplitude(tempratures);
console.log(amplitude);

// PROBLEM 2 

const caclAmplitudeNew = (t1,t2)=>{

    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length ; i++){
        let currentTemp = temps[i];
        if(typeof currentTemp !== 'number') continue; 
        if(currentTemp > max) max = currentTemp;
        if(currentTemp < min) min= currentTemp ;
    }
    console.log(max,min);
    return max-min;
}

console.log(caclAmplitudeNew([1,2,3],[4,5,6]));*/

// const mesaureKelvin = function(){
//     const measurement = {
//         type:"temp",
//         unit :'celcius',
//         value : Number(prompt('Degrees celcuis:'))
//     };
//     console.table(measurement);
//     const kelvin = measurement.value + 273;
//     return kelvin
    
// }

// console.log(mesaureKelvin());


const calcAmplitudeBug = (t1,t2)=>{

    const temps = t1.concat(t2);

    console.log(temps);

    let max = 0;
    let min = 0;

    for(let i = 0; i < temps.length ; i++){
        let currentTemp = temps[i];
        if(typeof currentTemp !== 'number') continue; 
        if(currentTemp > max) max = currentTemp;
        if(currentTemp < min) min= currentTemp ;
    }
    console.log(max,min);
    return max-min;
}

console.log(calcAmplitudeBug(
    [1,2,3],
    [4,5,6]
    ));