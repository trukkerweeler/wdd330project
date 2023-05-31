import { loadHeaderFooter } from "./utils.mjs";
await loadHeaderFooter();

const date = document.getElementById("date");
console.log(date);
date.innerHTML = `${new Date(Date.now()).getFullYear()}  Auto mXr is NOT a real business!`;