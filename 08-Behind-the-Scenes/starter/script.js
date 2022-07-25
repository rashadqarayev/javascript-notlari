'use strict';
/*
3 nov skop var:
global skop, funksiya skopu ve blok skopu

1. Global skop
const me  = 'Reshad'
const job  = 'developer'
const year = 1989;

Bu variableler globaldir ve her yerde istifade oluna biler. Istenilen funksiyanin colunde ve ya blokun colunde istifade ede bilerik

2. Funksiya skoplari -- diger adi -- Lokal Skoplar

function calcAge(birthYear) {
    const now = 2037;
    const age = now - birthYear;
    return age;
}
console.log(now); -- Error verecek

Bu variableler ancaq funksiya daxilinde istifade oluna biler. Funksiya colunde cagirilsa error verecek

3. Blok skoplari


if (year > 1981 && year < 2002) {
const milli = true;
const food  = 'Avocado'    
}

console.log(milli); -- Error verecek

Bu variableler de for, if else ve ya diger bloklarda istifade oluna biler. Biz if icerisinde her hansi bir variable teyin edib if -den kenarda isletsek error verecek. Bu yalniz let ve const a aiddir.


*/


/*
function calcAge (birthYear){
    const age = 2037-birthYear;

    function printAge(){
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;

            Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';

            Reassignging outer scope's variable
            output = 'NEW OUTPUT!';


            const str = `Oh, and you are millenial , ${firstName}`;
            console.log(str);

            function add(a,b){
                return a + b;
            }

          
        }
        console.log(millenial);  error vermir. var funksiya skopudu deye her yerde cagiria bilir

        console.log(str); error verir cunki const ve let blok skopudu.harda yaradilibsa orda cagirmaq olar;

        console.log(millenial);
        console.log(add(2,3)) error verecek
        console.log(output); // NEW OUTPUT!
    }
    printAge();
    return age;
}

const firstName = 'Reshad';
calcAge(1991);
console.log(age); error
printAge(); error*/


// Hoisting with variables

console.log(me); //'undefined' -- 'hoisted oldu amma undefinied gosterecek'
// console.log(job); // error verir -- cunki job tdz de yerlesir.
// console.log(year); // error verir -- cunki year da tdz da yerlesir

var me = 'Reshad';
let job = 'student';
const year = 1991;

// Funksiyalarda hoisting;

console.log(addDecl(2,3));
// hec bir error vermeyecek

// console.log(addExpr(2,3)); -- error

// console.log(addArrow(2,3)); -- error

function addDecl(a,b){
    return a + b;
}

const addExpr = function(a,b){
    return a + b
}

var addArrow = (a,b)=> a + b;

// Example 

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x = 1;
// var vasitesile yaradilan variableler window obyektinde movcud ola biler. Amma let ve ya const ile yaradilan variableler movcud olmur
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);