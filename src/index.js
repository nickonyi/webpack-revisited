import { greeting } from "./greeting";
const body = document.querySelector("body");
const btn = document.querySelector('#btn-click');
const div = document.createElement('div');


console.log(greeting);

btn.addEventListener('click',() => {
    div.textContent = "Hello there, What's your name?"
    body.appendChild(div)
})
