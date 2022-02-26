// imperative way of programming

let list = [1, 2, 3];

for (let i = 0; i < list.length; i++) {
  list[i] = list[i] + 1;
}
console.log(list);
//Declerative programming
//map -> maps each time of array to a funtioon and creates a new array based on
//the return values of the function calls
list.map(function (item) {
  return item + 1;
});
console.log(list);
list.map((item) => item + 1);
console.log(list);

//reduce is a function that takes single/accumulated value and the next time in the array
//and return s the new value.

const sum = (accumulatedsum, array) => accumulatedsum + array;
//(0,2)=>0+2  =2  (2,3)=2+3=5 (5,4)5+5=9
let output = list.reduce(sum);
console.log(output);
let con = [1, 2, 3].concat([4, 5, 6]);
console.log(con);
//Object assign
const obj = { num: 2 };
const newObj = Object.assign({}, obj);
newObj.num = 4;
obj.num; //2
//value of obj.num
//  predfined function call()
let obj1 = { num: 5 }; //JSON
let addToThis = function (x, y, z) {
  return this.num + y + z;
};
console.log(addToThis.call(obj1, 1, 2));
//predefined function apply=> used only for arrays
let list2 = [4, 5, 6];
console.log(addToThis.apply(obj1, list2));
