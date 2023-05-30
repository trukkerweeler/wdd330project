// This app is made with a paid car-api subscription. It may work differently
// once the paid subscription expires.
import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

const url = "https://car-api2.p.rapidapi.com/api/models?year=2020&direction=asc&sort=id&direction=asc&verbose=yes";
let key = "455d6aef42msh9006e3c78cd42d9p1bad46jsn6312ae8f1fc2"; //  rapid API
const button = document.getElementById('save-model')


function getModels() {
  const nameElement = document.getElementById('carname');
  const makeElement = document.getElementById('make');
  const modelElement = document.getElementById('model');
  const loadingElement = document.getElementById('loading');

  const makes = [];
  const models = {};
  loadingElement.classList.remove("hidden")
  makeElement.setAttribute("disabled", "disabled")
  modelElement.setAttribute("disabled", "disabled")

  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "car-api2.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);

      const modelData = response.data      
      modelData.forEach(({name, make}) => {
        if (!makes.includes(make.name) ) {
          makes.push(make.name)
          const makeOption = document.createElement("option")
          makeOption.innerText = make.name
          makeElement.appendChild(makeOption)
          models[make.name] = []
        }
        models[make.name] = [...models[make.name], name ]
        console.log(make['name'], '-', name)
      });
      // console.log(models)

      makeElement.addEventListener("change", () => {
      modelElement.removeAttribute("disabled")
      const make = makeElement.value
        const matchingModels = models[make]
        modelElement.innerHTML = ''
        matchingModels.forEach( (model) => {
          const modelOption = document.createElement("option")
          modelOption.innerText = model
          modelElement.appendChild(modelOption)
        })
      })
      loadingElement.classList.add("hidden")
    makeElement.removeAttribute("disabled")

    })
    .catch((err) => {
      console.error(err);
    });

    ///////// WRITING TO LOCAL STORAGE /////////
  button.addEventListener('click', () => {
  let storageArray = getLocalStorage("myCars");
  if (storageArray === null) {
    storageArray = [];
  }

  // console.log(makeElement.value)
  // console.log(nameElement.value)
  const myAddCar = {name:nameElement.value, make:makeElement.value, model:modelElement.value};
  storageArray.push(myAddCar);
  setLocalStorage('myCars', storageArray);
  });
}

getModels();

// function getLocalStorage(storageItem) {
//   return JSON.parse(localStorage.getItem(storageItem))
// }

// function setLocalStorage(data) {
//   const myData = JSON.stringify(data);
//   return localStorage.setItem('myCars', myData)

// }

