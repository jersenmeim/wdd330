export function getfromLS(key){
    return localStorage.getItem(key)
  }
  export function writeToLS(key, data) {
    localStorage.setItem(key,data);
  }
  export function qs(selector) {
    return document.querySelector(selector);
  }
