'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `
      Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
      `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious ${ing1} , ${ing2} and ${ing3}`);
  },
};


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
