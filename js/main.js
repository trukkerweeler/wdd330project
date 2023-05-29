import { getLocalStorage } from "./utils.mjs";

const myCarList = document.querySelector(".myCarList");
const myCars = getLocalStorage("myCars");

console.log(myCars);
renderMyCars(myCars);

function renderMyCars(myCars) {
  myCars?.map((car) => {
    const container = document.createElement("div");
    container.setAttribute("class", "carlist");
    const myCarName = document.createElement("p");
    const myCarMake = document.createElement("p");
    const myCarModel = document.createElement("p");
    const selectButton = document.createElement("button");
    selectButton.setAttribute("class", "choosecar");
    selectButton.setAttribute("onclick", "./maintain.html");
    // selectButton.textContent = "Maintain!";
    const link = document.createElement("a");

    // console.log(car.name)
    // console.log(car.make)

    myCarName.innerHTML = car.name;
    myCarMake.innerHTML = car.make;
    link.setAttribute("href", `./maintain.html?name=${car.name}`);
    link.innerHTML = "Maintain!";
    selectButton.appendChild(link);
    if (car.model === undefined) {
      myCarModel.innerHTML = "No model";
    } else {
      myCarModel.innerHTML = car.model;
    }

    console.log(myCarName.innerHTML);
    console.log(myCarMake.innerHTML);
    console.log(myCarModel.innerHTML);

    container.appendChild(myCarName);
    container.appendChild(myCarMake);
    container.appendChild(myCarModel);
    container.appendChild(selectButton);

    myCarList.appendChild(container);
  });
}
