'use strict';

// Data needed for a later exercise
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};















/*
/// Map ve methodlari

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct', 3],
  [true,'Correct!'],
  [false,'Try Again'], 
])

console.log(question);

Obyekti mapa cevirmek

console.log(Object.entries(openingHours));
const hoursMap = new Map (Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for(const [key,value] of question)
{
  if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

Output is below
What is the best programming language in the world?
Answer 1 : C
Answer 2 : Java
Answer 3 : JavaScript


const answer = Number(prompt('Your answer'))
console.log(answer);
if(answer === question.get('correct')){
  console.log(question.get(true));
}else{
  console.log(question.get(false));
}


Mapi arraya cevirmek
console.log([...question]);
console.log(question.entires());
console.log([...question.keys]);
console.log([...question.values()]);


*/

/*

Maps - map ozu obyekte oxsar yeni bir sey yaradir.burada ilk deyer onun keyi , ikinci deyer ise onun valuesi olur.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'))
Classico Italiano
console.log(rest.get(true));
We are open
console.log(rest.get(1));
Firenze, Italy

const time = 21;
console.log(
  rest.get(time > rest.get('open') && rest.get < ('close'))
eger time 11 ve 23 arasindadirsa
);

console.log(rest.has('categories'));
true
rest.delete(2)
console.log(rest);
2 ci deyer silindi - Lisbon , Portugal

console.log(rest.size);
uzunlugu
rest.clear();
console.log(rest); // silir
const arr = [1,2]
rest.set(document.querySelector('h1') , 'Heading')
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size); // 1

console.log(rest.get(arr));

*/

/*
Sets

Set arraya benzeyir. Ama arraydaki kimi indexine gore cagira bilmerik. ordersSet[0] error verecek. Setlerdeki her bir value unikdir. yeni 3 defe de yazilsa 1 defe de yazilsa yalniz 1 sayilir.
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
])
console.log(ordersSet);
Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(new Set("Resad"));
Set(5) {'R', 'e', 's', 'a', 'd'}

console.log(ordersSet.size);
yuxaridaki qaydaya esasen normalda bizde 6 value var.Amma ferqli 3 value oldugu ucun size i 3 gosterir

console.log(ordersSet.has('Pizza')); // oldugu ucun true
console.log(ordersSet.has('Bread')); // false

burdaki has methodu eyni ile arrayin includes methodu ile oxsardir. her ikisi yazilan valuenin orda olmasini yoxlayir. 

ordersSet.add('Lahmacun');
ordersSet.add('Lahmacun');
add methodu push a benzeyir. Biz burda 2 defe lahmacun deyerini sete elave etdik. Amma olar unik oludugu ucun 1 defe elave olund
console.log(ordersSet);
Set(4) {'Pasta', 'Pizza', 'Risotto', 'Lahmacun'};

ordersSet.delete('Pizza')
delete methodu da set de olan pizza valuesini setden silir.
console.log(ordersSet);
Set(3) {'Pasta', 'Risotto', 'Lahmacun'}

ordersSet.clear();
butun seti temizleyir

for(const order of ordersSet){
  console.log(order);
}

Example

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter']
const staffUnqiue = [...new Set (staff)];
console.log(staffUnqiue);

(3) ['Waiter', 'Chef', 'Manager']

console.log(new Set(['Waiter','Chef','Waiter',

'Manager','Chef','Waiter']).size);
3

console.log(new Set ('Reshad').size);
nece ferqli herf oldugunu tapiriq



*/

/*

Property Names

const pro = Object.keys(openingHours)
console.log(pro);

let openStr = `We are open on ${pro.length} days `
for(const day of Object.keys(openingHours)){
  console.log(day);
  burada openingHours obyektinin keylerini aliriq
  openStr += `${day},`
}
console.log(openStr);

Property values

const values = Object.values(openingHours);
console.log(values); -- burada Object.values vasitesile obyektin deyerlerini aliriq

Entire Object
const entries = Object.entries(openingHours)
console.log(entries);

for(const [key, {open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
Optional chaining - ?.
Bu operator vasitesile biz error evezine undefined ala bilirik

if(restaurant.openinghours && restaurant.openinghours.mon) console.log(restaurant.openinghours.mon);

console.log(restaurant.openinghours.mon.open);
bu error verir cunki mon gunumuz yoxdu

console.log(restaurant.openinghours.mon?.open);
Burda ise ?. operatoru vasitesile error evezine undefined aliriq.

Example

const days = ['mon','tue','wed','thu','fri','sat','sun']

for(const day of days){
  const open = restaurant.openinghours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`);
}
Burada mon, tue ,wed de her hansi bir open hours olmadigi ucun error verecek. Bu errorun qarsisini da ?. vasitesile aliriq ve undefinied yazdiririq


Methodlar
console.log(restaurant.orderPasta?.('a','b','c') ?? 'Method not exist');
method obyektde oldugu ucun isleyecek.

console.log(restaurant.assaasas?.(0) ?? 'Method not exist');

Arrays
const users = [
{
  name:"Reshad",
  email:"Reshad@mail.com"
}
]
console.log(users[0]?.name ?? 'Empty Array');
users in name deyeri oldugu ucun outputa Reshadi verecey



*/

/* 

/// For of - dongusu
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]

for(const item of menu) console.log(item);
arraydaki butun elementlere ulasa bilerik ayri ayriliqda

for(const [i , el] of menu.entries()){
  console.log(`${i + 1} : ${el}`);
}
bu dongude ise entries methodu islenir. bu da bize arrayin icindeki deyerin nomresini ve ozelliyini getirir
Output --- 1 : Focaccia, 2 : Bruschetta 
*/

/*
Logical Assignment Operators

const res1 = {
  name:"Capri",
  numGuests : 25
  numGuests : 0
}

const res2 = {
  name:"La Piazza",
  owner: 'Giovanni Rossi'
}

res1.numGuests = res1.numGuests || 10;
Res 1 de numGuests 25 oldugu ucun truedir ve burda dayanir.
res2.numGuests = res2.numGuests || 10;
Res 2 de ise numGuests 0 oludugu ucun false hesab olunur ve 10 qebul olunur.


OR assignment operatoru 

res1.numGuests = res1.numGuests || 10;
res2.numGuests = res2.numGuests || 10;
res1.numGuests ||= 10;
res2.numGuests ||= 10;

Nullish Assignment Operatoru (null or undefined)

res1.numGuests ??= 10;
res2.numGuests ??= 10;

     AND Assignment operatoru

res1.owner = res1.owner && '<ANONIM>';
res2.owner = res2.owner && '<ANONIM>';

res1.owner &&= '<ANONIM>'
res2.owner &&= '<ANONIM>'

console.log(res1); 
console.log(res2); 


*/

/*
Nullish operatoru - ??

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); 
normalda bunun cavabi 10 olacag. Cunki 0 falsedir ona gore kecib 10 u yoxlaycaq

Nullish deyerler: null ve undefinied ( 0 ve ya '' bura daxil deil)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
Ama burda 0 nullish value olmadigi ucun cavab : 0 olur.



*/

/*
Logical operatorlari ( OR - ||) and ( AND - && )
console.log('---- OR ----');

Istenilen data tipini istifade ede biler, data tipini return ede biler , ve short-circuting
short-circuting -- eger orda birinci deyer truedirse, ikinciye artiq baxmaga ehtiyac qalmir

console.log(3 || 'Reshad'); // result 3 

console.log('' || 'Reshad'); // bos string false oldugu ucun result Reshad olacag

console.log(true || 0); // true true verdiyi ucun gerisine baxilmir

console.log(undefined || null); // undefinied false oldugu ucun result null olur

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

Undefined 0 '' falsedir. Hello true oldugu ucun cavab Hello olur ve burada dayaniriq


const guests1 = restaurant.numGuests ?  restaurant.numGuests : 10;
console.log(guests1); // cavab 10 olacag

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // cavab 10 dur cunki numguests her hansi deyeri yoxdur ve 0 dir . 0 da false oldugu ucun cavab 10 olur

console.log('---- AND ----');

console.log(0 && 'Reshad');
Burda 0 false dir. And operatoru da her iki value true olanda islediyi ucun ilkin deyeri verir. Cavab 0 dir.

console.log(7 && 'Reshad');
Burda 7 truedir. Reshad da true oldugu ucun sonuncu deyeri verecek. Cavab : "Reshad"

console.log('Hello' && 23 && null && 'Reshad');
Burda hello truedir, 23 truedir, null falsedir. Burda dayanir ve cavab: null olur.

 Eger orderPizza funksiyasi varsa onu islet.
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'onion')
}

Burda orderPizza funksiyasi movcuddur ve funksiyani islede bilirik
restaurant.orderPizza &&   restaurant.orderPizza('mushrooms', 'onion')

*/

/*

/// Rest Pattern (... operatorun eksi)

/// ... burda rest operatorudur cunki beraberlik isaresinden evvel gelir. Bu operator 'others' adli yeni array yaradir ve ora yerde qalan elementleri daxil edir. Bu ifadede a = 1, b = 2 oludugu ucun,yerde qalan 3,4,5 elementleri others arrayina daxil olur
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others); // 1 , 2 , [3,4,5]


/// ... burda spread operatorudur cunki beraber isaresinden sonra gelir.Bu ifadede ise bizim elimizde olan bir arrayi parcalayaraq onun deyerlerini elde edirik
const arr = [ 1 , 2 , ...[3,4]];


const [pizza,,risotto , ...otherFood] =  [...restaurant.mainMenu , ...restaurant.starterMenu]

console.log(pizza,risotto,otherFood);
/// Rest operatoru hemise en sonda gelmelidi

/// Objects

const {sat , ...weekdays} = restaurant.openingHours;
console.log(weekdays);

2) Functions

obyektde olan butun ededlerin cemi

const add = function(...numbers){
  let sum = 0;
  for(let a = 0; a < numbers.length;a++){
    sum = sum + numbers[a];
  }
 console.log(sum);
}

add(2,3); // 5
add(5,4,3,2); // 14
add(9,2,4,1,5); // 21

const x = [23,5,7];
add(...x) // 23 + 5 +7;


restaurant.orderPizza('mushrooms',' onion' , 'olives' , 'spinach') // mushrooms [' onion', 'olives', 'spinach']
restaurant.orderPizza('mushrooms')
mushrooms , [] --- burda mushroomnan sonra hec bir value yazmadigimiz ucun bos bir array gelir bize
  */

/*
/// Spread(...) operatoru

Bu operator vasitesiyle arrayin eyni anda butun deyerlerini istifade ede bilirik

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // 1,2,7,8,9

... arrayin elementlerini cole cixarir ve newArr arrayimize bunu daxil edirik.

Eger ... isletmesek burda 2 den sonra bize Array verecek ve onun icindeki deyerli gosterecek

const newArr = [1, 2, ...arr];
console.log(newArr); // 1,2,7,8,9

console.log(...newArr); // 1,2,7,8,9
console.log(1, 2, 7, 8, 9); // 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
['Pizza', 'Pasta', 'Risotto', 'Gnocci']

Arrayin kopyasini yaratmaq

const mainMenuCopy = [...restaurant.mainMenu];

2 array birlesdirmek

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

Iterables : arrays,strings,maps,sets. NOT objects

Stringi herflerine ayirmaq
const str = 'Jonas';
const letters = [...str];
console.log(letters);
console.log(...str);


/// Burada prompt funksiyasi vasitesile userden ingredientleri aliriq 1 ci 2 ci ve 3 cu. Daha sonra funksiyada onu 0 1 2 yazmaq evezine spread operatoru vasitesile isledirik !

const ingredients = [
  prompt('Let s make pasta! Ingredient 1?'),
  prompt('Let s make pasta! Ingredient 2?'),
  prompt('Let s make pasta! Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients)

Object
const newRestaurant = {founded:2004,...restaurant, founder:"Reshad"}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano

*/

/*  Arraylari parcalamaq
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z); // 2 , 3 , 4
console.log(arr); // [2,3,4]


Arraylari parcalayaraq arrayin icindeki deyerlere ulasmaq

Burada first ve second 0 ve 1 ci deyerleri alir
const [first,second] = restaurant.categories
console.log(first,second); Italian, Pizzeria 


Burda firstden sonra vergul qoyuldugu ucun 1 ci deyer skip olur ve onun yerinde 2 ci deyer gorunur

let [main, ,secondary] = restaurant.categories
console.log(main,secondary); // Italian, Vegetarian

Variableleri deyismek
 1- ci qayda!

const temp = main;
main  = secondary;
secondary = temp;
console.log(main,secondary);  -- Vegetarian Italian


2 ci qayda. Array destructuring

[main , secondary] = [secondary,main];
console.log(main,secondary);  -- Vegetarian Italian

Menu dan gelen arrayi parcalayaraq icindeki deyeri elde etmek

const [starter,mainCourse] = restaurant.order(2,0)
console.log(starter,mainCourse); // Garlic Bread Pizza


Array icindeki arrayi parcalamaq ve deyerini tutmaq

const nested = [2,4,[5,6]]

const [i, , [j,k]] = nested;
console.log(i,j,k);


Default values - ilkin deyerler

const [p = 1,q = 1,r = 1] = [8,9];
console.log(p,q,r); // 8 9 1

*/

/*
Destructing Objects

1 ci kodda da eyni netice
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

2 ci kodda da eyni netice
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // cavab bos array ve start menyusu olacaq

Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // a ve b ilkin olaraq 111 ve 999 idi. Ancaq indi 23 ve 7 oldu. Variableleri deyishdik;

Nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 ve 23 


restaurant.orderDelivery({
  time: '22:30',
  address: 'Baku , 22',
  mainIndex: 2,
  starterIndex: 2,
});

  Order recieved! Garlic Bread and Risotto will be delivered to Baku , 22 at 22:30

restaurant.orderDelivery({
  address: 'Baku , 22',
  starterIndex  : 1
})



*/
