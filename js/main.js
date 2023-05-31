import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

// const date = document.getElementById('main-footer');
// console.log(date)
document.getElementById('main-footer').textContent = new Date(Date.now()).getFullYear();
// console.log(Date.now()).getFullYear())