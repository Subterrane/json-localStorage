var LocalStorage = require('./json-localstorage.js');
var localStorage = new LocalStorage();

console.log(localStorage.setItem("testKey", "testValue") === undefined);
console.log(localStorage.getItem("testKey") === "testValue");
console.log(localStorage.getItem("foo") === null);
console.log(localStorage.length === 1);
console.log(localStorage.key(4) === null);
console.log(localStorage.key(0) === "testKey");
console.log(localStorage.clear() === undefined);
console.log(localStorage.length === 0);
console.log(localStorage.removeItem("foo") === undefined);
console.log(localStorage.length === 0);
console.log(localStorage.setItem("foo", "bar") === undefined);
console.log(localStorage.length === 1);
console.log(localStorage.removeItem("foo") === undefined);
console.log(localStorage.length === 0);
