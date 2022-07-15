// let js = "Amazing";
// if(js === "Amazing") alert("JavaScript Is FUN")

// 40+8+23-10;
// console.log(40+8+23-10)
// camelCase notation for example: firstName newBook
// console.log("Reshad")
// console.log(23)

// let firstName = "Reshad";
// console.log(firstName)

// You cannot use reserved keyword as variable name. For Example: new,function --- you will get Unexpected Token error

// let myFirstJob = "Programmer"
// let myCurrentJob = "Teacher";

// console.log(myFirstJob)


// Data Types:
// Number: reqemler ucun istifade olunur. 
// Meselen : let age = 23;

// String: her hansi bir text ucun istifade olunur. 
// Meselen : let firstName = "Reshad";

// Boolean: true ve ya false ucun istifade olunur. 
// Meselen : let fullAge = true;

// Undefined: Bos deyer, her hansi bir variablenin deyeri olmasin.
//  Meselen : let children, let age;

// Null: Bos deyer demekdi;

// Symbol (ES2015) : unik bir deyer ve hec zaman deyismir(hal hazirda istifade olunmur)

// BigInt (ES2020) : boyuk reqmeleri yazmaq ucun istifade olunur.

/* Biz hec bir zaman deyerin string number boolean oldugunu demirik JS de.
 JavaScript ozu dinamik oldugu ucun avtomatik basa dusur. */

// true;

// let javascriptIsFun = true;

// console.log(javascriptIsFun);

// Her hansi bir variablenin tipini oyrenmek istesek typeof dan istifade olunur

// console.log(typeof javascriptIsFun)
// console.log(typeof 25)
// console.log(typeof "Reshad");

// Eger variablenin valuesini deyismek isteyirikse define edib yaziriq;

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun)


// Undefinied datatype example

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1992;
// console.log(typeof year);

// console.log(typeof null)


// let , var , const la variable yaratmaq

// Let - biz let vasitesile yaratdigimiz variablenin deyerini istediyimiz vaxt deyise bilirik . (mutable variable)(deyisebilen variable)

// let age = 30;
// age=31;

// Const - biz const vasitesile yaratdigimiz variablenin deyerini hec vaxt deyise bilmirik. Cunki const - sabit demekdir. (Immutable varibale)(deyisebilmeyen variable). Eger const yaziriqsa hemin variableye deyer verlemiyik. Deyer vermesek o error verecek

// const birthYear = 1992;
// birthYear = 1990;
// const job;

// VAR - var lete benzeyir, amma kohne oldugu ucun cox az istifade olunur.

// var job = "programmer";
// job = "teacher"

// Hec vaxt let ,const, var istifade etmeden variable yazma!!!!


// Basic Operators Lecture

// Riyazi operatorlar  -- Math operators

// const now = 2037;
// const ageReshad = now - 2004;
// const ageSarah  = now - 2020;
// console.log(ageReshad,ageSarah);

// console.log(ageReshad * 2, ageReshad / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 ; 2*2*2 = 8

// const firstName = "Reshad";
// const lastName  = "Qarayev";
// console.log(firstName + " " + lastName);


// Assignment operators

// let x = 10 + 5; // x = 15
// x +=10; // x = x + 10 = 25
// x*= 4 ; // x = x * 4 = 100
// x++ // x = x + 1
// x-- // x = x - 1 
// console.log(x);


// Comparision operators  --  Muqayise operatorlari

// > , < , >= , <= 
// console.log(ageReshad > ageSarah); 
// eger duzdurse true sehvdirse false qaytatir

// console.log(ageSarah >= 18);

// const isFullAge  = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// Operators precedence - operatorlarin ardicilligi

// const now = 2037;
// const ageReshad = now - 2004;
// const ageSarah  = now - 2020;

// console.log(now - 1991 > now - 2018);


// let x,y;
// x = y = 25 - 10 -5; // x = y = 10
// console.log(x , y);

// const averageAge = (ageReshad + ageSarah) / 2;
// console.log(ageReshad , ageSarah , averageAge);



// Strings and Literal templates

// const firstName = "Reshad";
// const job  = "teacher";
// const birthYear = 2004;
// const year = 2037;

// const reshad = "I'm " + firstName + ", a " + ( year- birthYear) + " years old " + job  + "!";

// console.log(reshad);

// literal template - biz string icinde her hansi bir variableni cagirmaq ucun istifade edirik . $ qoyub {} icinde variable name yaziriq.

// const reshadNew  = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(reshadNew);

// console.log('String with \n\
// mutliple \n\
// lines')

// literal templateni hemde daha cox setirde string yazmaq ucun istifade
// console.log(`String 
// multipe
// lines`);

// If else statements
// if ( burda sert yazilir  ) { burdada eger dogrudursa yerine yetirilecek kod yazilir }
//  eger if dogru olmasa else{ burdada eger dogru deilse bu kod isleyir}

// const age  = 15;

// if(age >= 18){
//     console.log("Reshad can start school");
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Reshad is too young. Wait another ${yearsLeft} years:)`);
// }

// const birthYear = 2012;
// let century
// if(birthYear <= 2000){
//     century = 20;
//     console.log();
// }else{
//     century = 21;
// }

// console.log(century);

// Type conversion and coersion 
// conversion - stringi numbere ve ya numberi booleana cevirik

// const inputYear  = '1991';
// console.log(Number(inputYear) , inputYear);
// Burdaki Number functionu stringi numbere cevrir
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);
// NAN - Error not a number demekdi

// console.log(String(23) , 23);
// Burdaki String functionu numberi strine cevirir
// eger consoledaki value ag rengdirse demeli stringdir

// Type Coercion (Avtomatik cevrilme)
// burdaki 23 reqemi avtomatik stringe cevrildi. Eger 2 string arasinda yerlesibse cevrilir.

// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + 23 + ' years old')

// asagidaki yazida da string avtomatik reqeme cevrildi ve cavab 13 oldu
// console.log('23' - '10' - 3);
// console.log('23 ' / '5');

// + olarsa number stringe cevrilir , - ve digerleri olsa string numbere cevrilir

// let n = '1' + 1; // '11' string
// n = n - 1; // 10
// console.log(n);

// Truthy and Falsy values;

// 5 falsy values : 0 , '' , undefined , null , Nan;
// falsy valueni booleana cevirende false gosterir

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false 
// console.log(Boolean('Reshad')); // true
// console.log(Boolean({}));
// console.log(Boolean("")); //false


// const money = 100;
// money 0 oldugu ve 0 da false oldugu ucun else isleyecek !!!
// if(money){
//     console.log("Don't spend it all ;)");
// }else{
//     console.log("You should get a job !");
// }

// let height = 12 ;
// heigtin hec bir valuesi olmadigi ucun undefineddir. undefined false value oldugu ucun de else isleyecek !!!;
// if(height){
//     console.log("YAY ! Height is defined")
// }else{
//     console.log("Height is undefined");
// }


// Equality operators "==" ve "===" ferqi

// const age = '18';
// if(age === 18) console.log("YOu just became an adult : D (Strict)");
// === ise type coersionda islemir
// Meselen : '18' === 18 ; bu false verecek

// if(age == 18) console.log("YOu just became an adult : D (Loose)");
//  == type coersionda da isleyir
//  Meselen: '18' == 18 ; bu true verecek

// const favourite = Number(prompt("What is your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite == 23){ // '23' == 23;
//     console.log("Cool! 23 is an amazing number!")
// }

// if(favourite === 23){ // 23 === 23;
//     console.log("Cool! 23 is an amazing number!")
// }else if(favourite === 7){
//     console.log('7 is also a cool number');
// } 
// else if(favourite === 9){
//     console.log('9 is also a cool number');
// }
// else{
//     console.log('Numbeer is not 23 or 7');
// }

// if(favourite !== 23){
//     console.log('Why not 23?');
// }



// Logic Operators

// const hasDriversLicense  = true; // A
// const hasGoodVision = true;  // B

// And operatoru &&   her ikisi true olsa true, biri false olsa false verecek

// console.log(hasDriversLicense && hasGoodVision)

// Or operatoru || ikisinden biri true  olsa true verecek;
// console.log(hasDriversLicense || hasGoodVision)

// Not operatoru  - ! truedise false , falsedise true verir;
// console.log(!hasDriversLicense);


// const shouldDrive  =  hasDriversLicense  && hasGoodVision;

// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// }else{
//     console.log('Someone else should drive...');
// }

// const isTired  = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive! She is not tired');
// }else if(hasDriversLicense && hasGoodVision && isTired){
// console.log('Sarah is able to drive, But she is tired');
// }


// Switch statement

// eger truedirse break yazanda kod stop edir, eger olmasa kod davam edir

// const day  = 'saturday';
// switch(day){
//     case 'monday': //day == 'monday' will give true
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');    
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday' :
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D'); 
//         break;
//      default :
//      console.log('Not a valid day !');                 
// }

// if(day === 'monday'){
//     console.log('Plan course structure');
//         console.log('Go to coding meetup');
// }else if (day === 'tuesday'){
//     console.log('Prepare theory videos');    
// } else if (day === 'wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// }else if (day === 'friday'){
//     console.log('Record videos');
// }else if (day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend : D');
// }else{
//     console.log('Not a valid day !');     
// }



// Statement and expressions

// 3+4 // expression yeni yalniz ifadedir
// 1991 // expression yeni yalniz ifadedir
// true && false && !true // buda yalniz ifadedir

// if(23 > 10){
//     const a = '23 is bigger' // bu sadece expressiondur
// } // bu statementdir

// statement sadece sertlerdir onun icerisinde expressionlar yerlesir


// Conditional operators;

//  ? - eger truedursa demekdi , : - ise false demekdir
//  ? - hemde if demekdir , : - hemde else demekdir  demekdir

// if elseni literal templatede istifade etmek olmur ama ? : ni isletmek olur

// const age = 12;
// // age >= 18 ? console.log('I like to drink wine') : console.log('I dont like to drink wine');

// const drink  = age >=18 ? 'wine' : 'water'
// console.log(drink);

// console.log(`I like to drink ${age >=18 ? 'wine' : 'water'}`)