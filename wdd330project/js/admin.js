import { loadHeaderFooter, getLocalStorage, setLocalStorage, clearLocalStorage } from "./utils.mjs";

loadHeaderFooter();

const clearButton = document.getElementById('del-ls')

clearButton.addEventListener('click', () => {
    // console.log("deleting ls")
    clearLocalStorage('myCars');
    })