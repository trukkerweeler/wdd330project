// global localStorage;

export function getLocalStorage(storageItem) {
    return JSON.parse(localStorage.getItem(storageItem))
  }
  
export function setLocalStorage(storageKey, data) {
    const myData = JSON.stringify(data);
    return localStorage.setItem(storageKey, myData)  
  }

  export function clearLocalStorage(key) {
    // console.log("utils delete")
    localStorage.clear(key);
  }

  // this function gets a parameter from the url 
export function getParam(type){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(type);
  return product;
}

export function renderWithTemplate(template, parentElement, data, callback, position = "afterbegin"){
  if (parentElement) {
    parentElement.insertAdjacentHTML(position, template);
    if (callback) {
      callback(data);
    }
  } else {
    console.error("Parent element is null or undefined.");
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter(){
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}