/* Strict mode 
Bezen konsolda error gostermir, errorlari daha rahat tapmaq ucun use strict modu islenir. Aktiv etdiyimiz zaman errorlari gore bilirik.
'use strict';

let abc = false;
const b = true;

if(b) bc = true;
if(abc) console.log('A is true');

burda rezerv olunmus sozu isletmisik. use strict aktiv olanda erroru gosterecek
const interface  = 'as'; */

// Functions
// For example we need write 3 times console log. but if u write function about it you will call it somewhere you need

// function logger(){
//     console.log('My name is Reshad');
// }

// logger();
// logger();
// logger();



// function fruitProcessor(apples,oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// burdaki funksiya juiceni return edir. Daha sonra funksiyani asagida cagiriq

// apples and oranges are parameter. You can think as emtpy variables.When we call the function like (5,0) . you will make apples  = 5, oranges = 0;

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// or
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);
// Output : Juice with 2 apples and 4 oranges


// Function Declatarion

// bu zaman funksiya yaradiriq. Daha sonra onu loqda gormek ucun variableye store edirik. Ve loqda cagiririq

// const age1 = calcAge1(2033);

// function calcAge1(birthYear){

//     return 2037-birthYear
// }



// Function Exprresion

// Burda ise funksiyani evvelceden const a beraber edirik. Yeni adini ozune yox const a  = function yaziriq.

// const calcAge2 = function(birthYear){
//     return 2037-birthYear
// }

// const age2= calcAge2(2033);
// console.log(age1,age2);


// Declaration ve Expression arasindaki en boyuk ferq:

// Eger Declarationdaki const age1 variablesini evvelce yazib sonra funksiyasini yazsaq , yene isleyecek

/*const age1 = calcAge1(2033);

function calcAge1(birthYear){

    return 2037-birthYear
}*/


// Ancaq Expressionda deyeri birinci cagirib sonra funksiyani teyin etsek error verecek. Bunun da sebebi hoistingdir.

// const age2= calcAge2(2033);

//     const calcAge2 = function(birthYear){
//      return 2037-birthYear
//  } 


// Arrow Functions 



// const calcAge3 = birthYear =>2037-birthYear;
// console.log(calcAge3(2032)); 

// const yearsUntilRetirement = (birthYear,firstName)=>{
//     const age = 2037-birthYear;
//     const retirement = 65-age;
    // return retirement
//     return `${firstName} retires in ${retirement} year`

// }

// console.log(yearsUntilRetirement(2032,"Reshad"));
// console.log(yearsUntilRetirement(2030,"Nicat"));


// Function calling other functions
// Bir funksiya icerisinde digerini cagirma

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of appple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));
// burdaki 2 deyeri applesin yerine gedir ve cutfruit funksiyasinda fruitin yerine gelir yeni fruit 2 dir ve fruit * = 8 olacaq.



//Review Functions

// const callAge=(birthYear)=>{
//     return 2037-birthYear;
// }


// return etdikde funksiyadan cixir ve returnnen sonra olan butun kodlar ignore olur

// const yearsUntilRetirement = (birthYear,firstName)=>{

//     const age  = callAge(birthYear);
//     const retirement = 65-age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
        
//     }else{
//         console.log(`${firstName} has already retired`);
//         return -1;
        
//     }
    // return `${firstName} retires in ${retirement} years`

// }

// console.log(yearsUntilRetirement(1991,"Reshad"));
// console.log(yearsUntilRetirement(1970,"Mike"));


// Arraylar

// arraylar - datalari icinde saxlaya bileceyimiz containerlerdir.

// const friend1 = "Michael";
// const friend2 = "Steven"
// const friend3 = "Peter";

// Arrayin yaratmaqin ilk yolu
// const friends = ['Michael','Steven','Peter']

// console.log(friends);

// Array yaratmagin ikinci yolu

// const years = new Array(1991,1984,2004,2012);
// console.log(years);

// Arraylar 0 dan baslayir 
// Michael - 0 , Steven - 1, Peter 2 yerdedi
// Arrayin n ci elementini cagirmaq asagidaki qaydada bash verir

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

/// Arrayin sonuncu elementini tapmaq
// console.log(friends[friends.length - 1]);

// Arrayda hansisa elementi deyismek, Peteri silib Reshad yazdiq
// friends[2] = "Reshad";
// console.log(friends);
// Eslinde const deyirikse onun valuesini deyismek olmaz, ama Arraylar bura istisnadir.

// const firstName = 'Reshad'
// const reshad = [firstName,'Qarayev',2037-2004,'student',
// friends]
// console.log(reshad);

// const calcAge = function(birthYear){
//     return 2037-birthYear
// }

// const years = [1991,2004,2005,2006,2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1);
// console.log(age2);
// console.log(age3);


// Biz arrayin icinde funksiyadan aldigimiz deyeri de yazdira bilirik
// const ages = [age1,age2,age3]
// console.log(calcAge(years[0]),calcAge(years[1]),
// calcAge(years[years.length-1]));


// ARRAY METHODLARI

const friends = ['Michael','Steven','Peter'];

// Element elave eden methodlar

'push()- Arrayin sonuna element elave edir';

// friends.push('Reshad');
// console.log(friends);
// ['Michael', 'Steven', 'Peter', 'Reshad']
// console.log(friends.length);

'unshift() - Arrayin evveline element elave edir';

// friends.unshift('Nicat');
// console.log(friends);
// ['Nicat', 'Michael', 'Steven', 'Peter', 'Reshad']

// Element silen methodlar

'pop() - Arrayin sonuncu elementini silir';
// friends.pop();
// console.log(friends);
// ['Nicat', 'Michael', 'Steven', 'Peter']

'shift() - Arrayin ilk elementini silir';
// friends.shift();
// console.log(friends);
// ['Michael', 'Steven', 'Peter']

'indexOf - istenilen elementin indexini qaytarir';
// console.log(friends.indexOf('Steven'));

'includes() - eger Arrayda o element varsa true yoxdursa false gosterir';
// friends.push(23)
// console.log(friends.includes('Steven')); //true
// console.log(friends.includes('Reshad')); //false
// console.log(friends.includes(23)); //true

// if(friends.includes('Peter')){
//     console.log('You have friend called Peter');
// }else{
//     console.log('You do not have friend called Peter');
// }


// Objects - Objeler

// const reshadArray = [
//     'Reshad',
//     'Qarayev',
//     2037-2004,
//     'student',
//     ['Michael','Peter','Steven ']
// ]

// const reshad = {
//     firstName: 'Reshad',
//     lastName : 'Qarayev',
//     age: 2037-2004,
//     job:'student',
//     friends:['Michael','Peter','Steven ']
// }

// arrayla objectin ferqi::
// biz arraydaki her hansi bir value ni istesek onu sira nomresi ile tapa bilirik
// ama objectlerdeki valuelere ad vererek cagirmaq olur


// Dot and Brackent notation


// const reshad = {
//     firstName: 'Reshad',
//     lastName : 'Qarayev',
//     age: 2037-2004,
//     job:'student',
//     friends:['Michael','Peter','Steven ']
// }
// console.log(reshad);

// Objectdeki her hansi bir propertie ulasmagin yolu
// 1 - Dot Notation - burdaki . - operator demekdi objeye gedir

// console.log(reshad.agelastName);

// 2  - bracket Notation

// console.log(reshad['lastName']);

// const nameKey = 'Name';
// console.log(reshad['first' + nameKey])
// console.log(reshad['last' + nameKey])

// console.log(reshad.age'last' + nameKey);

// Dot ve ya bracketi ne zaman istifade etsek meqsedeuygun olar?

// const interestedin = prompt('What do you want to know about Reshad? Choose between firstName,lastName,age,job and friends')

// console.log(reshad.ageinterestedin); // bu kod islemeyecey cunki reshad objectinin interestedin propertisi yoxdur

/// ama bu kod isleyecek
// console.log(reshad[interestedin]);

// if(reshad[interestedin]){
//     console.log(reshad[interestedin])
// }else{
//     console.log('Wrong request!');
// }

// Objecte yeni properti elave etmek
// reshad.agelocation = 'Azerbaijan';
// reshad['twitter'] = '@reshadqarayev';
// console.log(reshad);

//Challange

// 'Reshad has 3 friends , and his best friend is Nicat';

// console.log(`${reshad.agefirstName} has ${reshad.agefriends.length} friends and his best friend is ${reshad.agefriends[0]}`);



// Object METHODLARI

// const reshad = {
//     firstName: 'Reshad',
//     lastName : 'Qarayev',
//     birthYear: 2004,
//     job:'student',
//     friends:['Michael','Peter','Steven '],
//     hasDriversLicense : true,

    // calcAge: function(birthYear){
    //     return 2037-birthYear;
    // }

      // calcAge:function(){
        // console.log(this);
    //     return 2037-this.birthYear;
    // }

    // burda this = reshad obyektine beraberdi ve ona gore biz rahatliqla this.birthyeardeye bilirik
//     calcAge: function(){
//         this.age = 2037-this.birthYear;
//         return this.age;
//     },
//     getSummary:function(){
//         return `${this.firstName} is a ${this.job} , and he has ${this.driverLicense()} driver's license `
//     },
//     driverLicense:function(){
//         if(this.hasDriversLicense){
//             return 'a'
//         }else{
//             return 'not'
//         }
//     }
// };

// this variablesi --- cagirildigi yerde obyekte beraberdi

// Objectde aid olan butun funksiyalar METHOD adlanir
// console.log(reshad.calcAge());
// console.log(reshad.age);
// console.log(reshad.age);
// console.log(reshad.age);


//  For dongusu

// bu dongu sert dogru olana kimi isleyecek. yeni say 10 a beraber olanda dayanacaq

// for(let say = 1; say <=10;say++){
//     console.log(`Qaldirma sayi ${say}`);
// }

// Arraylari for dongusu ile isletmek

/*const reshadArray = [
    'Reshad',
    'Qarayev',
    2037-2004,
    'student',
    ['Michael','Peter','Steven '],
    true
];

const types = [

]

console.log(reshadArray[0])


for (let i = 0; i < reshadArray.length; i++) {
    // Reshad Arrayi komeyiyle elementlerin typesini oyrenmek
   console.log(reshadArray[i], typeof reshadArray[i]);
   // bos bir arrayin icini doldurmaq
    // types[i] = typeof reshadArray[i];
    types.push(typeof reshadArray[i])
}

console.log(types);

const years  = [1991,2007,1969,2020];
const ages = [];

for(let i = 0; i< years.length; i++){
    ages.push(2037 - years[i])
}

console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS --- `);
for (let i = 0; i < reshadArray.length; i++) {
   if(typeof reshadArray[i] !== 'string') continue;

// Burda deyirik ki eger arraydaki deyerin type string deyilse skip et yeni davam ele yox stringdirse saxla -- continue isledirik;

    console.log(reshadArray[i], typeof reshadArray[i]);
}

console.log(`--- BREAK WITH NUMBER --- `);
for (let i = 0; i < reshadArray.length; i++) {

    if(typeof reshadArray[i] === 'number') break;

    // Burda deyirik ki eger arraydaki deyerin typei numberdirse stop ele ve o da 3 cu sirada olan numberi gorur. ora qeder olan ne varsa ekrana yazdirir

    console.log(reshadArray[i], typeof reshadArray[i]);
} */

// Loops in loops

/*const reshadArray = [
    'Reshad',
    'Qarayev',
    2037-2004,
    'student',
    ['Michael','Peter','Steven '],
];

Arraydaki elementleri eksine yazdirmaq

for (let  i = reshadArray.length - 1 ; i  >= 0;i--){
console.log(i,reshadArray[i]);
}


for(let a = 1; a <= 3 ; a ++){
    console.log(`Exercise ${a}`);
    for(let b = 1; b <= 5; b++){
        console.log(`Repeat time ${b}`);
    }
}*/


/// While dongusu


// Bu dongu a 10 a beraber olacagi ana kimi isleyecek. yeni while icindeki sert dogru olana kimi isleyir. Bun dongude forun ilk hissesi whileden evvel, yeni while let a  = 1 i evvel yaziriq, a++ ve ya  a-- i whilein icerisinde yaziriq

let a = 1;
while (a <= 10) {
    console.log(`Exercise ${a}`);
    a++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}
