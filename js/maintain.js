import { getLocalStorage, getParam, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const myCarList = document.querySelector(".myCarList");
const button = document.getElementById("savemx");
const myCars = getLocalStorage("myCars");

let queryString = window.location.search;
let urlParam = new URLSearchParams(queryString);
// console.log(urlParam);
let value = urlParam.get('name');
// console.log(value);

const selectedCar = getLocalStorage("myCars");
const result = selectedCar.filter(car => {
    return car.name === value;
});

// console.log(result);
const mname = result[0].name;
const mmake = result[0].make;
const mmodel = result[0].model;

// console.log(result[0].name)
// console.log(result[0].make)
// console.log(result[0].model)

const carinfo = document.getElementById('carinfo');
const name = document.createElement("p");
name.innerText = mname;
const make = document.createElement("p");
make.innerText = mmake;
const model = document.createElement("p");
model.innerText = mmodel

carinfo.appendChild(name);
carinfo.appendChild(make);
carinfo.appendChild(model);


///////// WRITING TO LOCAL STORAGE /////////
button.addEventListener('click', () => {
let storageArray = getLocalStorage(mname);
if (storageArray === null) {
    // console.log(`array is empty: ${mname}`)
    storageArray = [];
}
const maintain = document.getElementById('maintain');
const date = document.getElementById('date');
const mileage = document.getElementById('mileage');
const notes = document.getElementById('notes');

console.log(mname)
console.log(maintain.value)
console.log(date.value)
console.log(mileage.value)
console.log(notes.value)

const myAddMaint = {maint_date: date.value, description:maintain.value, mileage:mileage.value, mnote:notes.value};
storageArray.push(myAddMaint);
setLocalStorage(mname, storageArray);

// clear the fields...
});