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
/*callback is a function passed as an argument to
another function. callback are async functions, where one
function has to wait for another function
*/
function createEmp(newEmp, callback) {
  setTimeout(() => {
    emps.push(newEmp);
    callback();
  }, 2000);
}

getAllEmps(); //1000 ms
createEmp({ ename: "Arnold", email: "arnold@gmail.com" }, getAllEmps); //2000 ms
