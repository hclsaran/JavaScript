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
/*  Asynch and await make promises easier to write
asynch makes a function return a Promise
await makes a functions wait for a Promise*/
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

async function test() {
  await createEmp({ ename: "Arnold", email: "arnold@gmail.com" });
  getAllEmps();
}
test();
