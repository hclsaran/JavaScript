document.write("Welcome Java Script"); //print on the browser
console.log("Welcome to JavaScript console"); //browser console
//always use let(dont use var keyword)
let z1 = 12;
console.log("printing something" + z1);

//var -> scope level function
//let -> scope level block
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHello();
//JSON( Javas Script Object Notation)
const emp = {
  name: "Lakshmi",
  printEmp: function () {},
  printEmp2() {
    console.log(this);
  }, //es6 standards
};

const x1 = emp.printEmp2();
console.log(x1);

let kk1;
kk1 = 2222;
console.log("after declaring" + kk1);

let a; //decleration
//var vs let
a = 10; //initialization
console.log(a);
//JavaScript support loosely typed language
let a1 = 10;
//a1 = true;
//a1 = "abc";
var z2 = typeof a1;
console.log("Type of z2 is " + z2);

let b1 = "10";
let xx = true;
let c1 = 12;

console.log("a1+b1 = " + (a1 + b1));
console.log("a1+b1 = " + (b1 - a1));
console.log(a1 == b1); //true
console.log(a1 === b1); //false
// Array Destructing
let [first, second, third] = ["Apples", "Oranges", "Strawberry"];
//let [1,2,3]=['Apples','Oranges','Strawberry'];
let test = ["one", "two", "three"];
let [aa1, bb2, cb3] = test;
console.log(first);
console.log(second);
console.log(third);
//Destructuring returned arrays
function callMe() {
  return ["one", "two", "three"];
}

let [x, y, z] = callMe();
console.log(x);
console.log(y);
console.log(z);

//spread or rest parameter
let vegies = ["carrot", "eggplant", "greenpepper"];
let [first1, second1, third1] = [
  "musrhroom",
  "chillies",
  ...vegies,
  "cilantro",
  "potato",
];
console.log(first1);
console.log(second1);
console.log(third1);
//swapping variables
var xy1, yz1, yz2;
[xy1, yz1, yz2] = ["Blue", "Green", "Yellow"];
[xy1, yz1, yz2] = [xy1, yz2, yz1];
console.log(xy1);
console.log(yz1);console.log(yz2);
//A function can be assigned to a variable
let sum = function (a, b) {
  return a + b;
};
sum(1,2);
//Arrow function =>
let sum1 = (a, b) => a + b;  
console.log(sum1(1, 2));

let prod = (x) => x * 2;
console.log(prod(2));

let age = 20;
//conditional or ternary operator
let call =
  age > 19
    ? () => console.log("Welcome")
    : () => console.log("You are not eligible");
call();

//map
let values = [20, 30, 40];
let double = (n) => n * 2;
//higher order function
let totalvalue = values.map(double);
console.log(totalvalue);
//filter
//const
let points = [7, 16, 21, 4, 3, 22, 5];
let maximumScore = points.filter((n) => n > 15);
console.log(maximumScore);
//forEach
let sample = [1, 2, 3, 4, 5, 6];

sample.forEach((value, index) => console.log(`${value} comes at ${index}`));
//reduce reduce the array to a one single value

var reducetest = sample.reduce((sum, elem) => sum + elem);
console.log(reducetest);

//call

let obj1 = { num: 2 };

let addToThis = function (a, b, c) {
  return this.num + a + b + c;
};
console.log(addToThis.call(obj1, 3, 4, 5));
//apply is only used for arrrays

let obj2 = { no: 5 };
let arr = [1, 2, 3];
let addTo = function (a, b, c) {
  return this.no + a + b + c;
};
console.log(addTo.apply(obj2, arr));

//bind
let addTo3 = function (a, b, c) {
  return this.numb + a + b + c;
};
let obj3 = { numb: 2 };
let addBind = addTo3.bind(obj3);
console.log(addBind(1, 2, 3));
//PROMISE

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("failure");
  });

let promiseToGetGoodMarks = new Promise(function (resolve, reject) {
  let isGoodMarks = false;
  if (isGoodMarks) {
    resolve("Got good marks");
  } else {
    reject("failed");
  }
});

promiseToGetGoodMarks
  .then(function (fromResolve) {
    console.log("The result is " + fromResolve);
  })
  .catch(function (fromReject) {
    console.log("the result is " + fromReject);
  });

let cleantheRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve("Cleaned perfect without any dust");
  });
};

let removetheGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + "Remove the garbage   ");
  });
};

let rewarded = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + "Rewarded $100 dollars  ");
  });
};

cleantheRoom()
  .then(function (result) {
    return removetheGarbage(result);
  })
  .then(function (result) {
    return rewarded(result);
  })
  .then(function (result) {
    console.log(result + "All process finished   ");
  });

Promise.all([cleantheRoom(), removetheGarbage(), rewarded()]).then(function () {
  console.log("finsihed");
});

//closures - used to encapsulate private data/methods
//dealing with local variables that were in scope at the time the closure created

function call22() {
  let height = 6;

  function callMe() {
    console.log("My height is " + height + "feet");
  }
  return callMe;
}

let finalCall = call22();
finalCall();

function emp123(propName) {
  return function (a, b) {
    return b[propName] - a[propName];
  };
}

const emp1 = { name: "mani", height: 72 };
const emp2 = { name: "jack", height: 71 };
const emp3 = { name: "samuel", height: 70 };

const arr123 = [emp1, emp2, emp3];
const arr_sort = arr123.sort(emp123("name"));
console.log(arr_sort);

//3rd example private variables and methods

const bkAc = (initialBalance) => {
  const balance = initialBalance;

  return {
    getBalance: function (amount) {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
  };
};

const account = bkAc(100);
account.getBalance(); //100
account.deposit(25); //125
