import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { at_method } from "./examples/array/at_method.js"

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id='header'>Hello Javascript!</h1>
  </div>
`


const headerEl = document.getElementById("header");

headerEl.style.color = "red"

// headerEl.addEventListener('click', () => {
//   alert()
// })