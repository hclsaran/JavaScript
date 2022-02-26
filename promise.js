const emps = [
  { ename: "Tristan", email: "triston@gmail.com" },
  { ename: "Jawad", email: "jawad@gmail.com" },
  { ename: "lakshmi", email: "lakshmi@gmail.com" },
];
function getAllEmps() {
  setTimeout(() => {
    let result = "";
    emps.forEach((emp, index) => {
      result += `<li> ${emp.ename}</li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
}
/* I am promising that if you get good marks you will be rewarded
or if you fail you have to retake the test
Promise Object properties are
Pending
FullFilled
Rejected
support two properties:state and result
while a Promise object is pending status the result is undefined
while a Promise object is fullfilled the result is a value(then())
while a Promise object is rejected , the result is an error object
this can be catch() function will be fired
*/
function createEmp(newEmp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      emps.push(newEmp);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

getAllEmps(); //1000 ms
createEmp({ ename: "Arnold", email: "arnold@gmail.com" })
  .then(getAllEmps)
  .catch((err) => console.log(err)); //2000 ms
