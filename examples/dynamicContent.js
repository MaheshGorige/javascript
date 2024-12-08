let data = "";

const div = document.createElement('div');
const input = document.createElement('input')
input.setAttribute(name, "name")
input.value = "Mahesh"
div.appendChild(input);
const button = document.createElement('button')
button.textContent = "Click"
button.onclick = (() => { 
  data = input.value
  console.log(data)
  if(data !== ""){
    const p = document.querySelector('p');
    if(!p){
       const p = document.createElement('p')
    p.textContent = data
    div.appendChild(p)
    } else {
      p.textContent = data
    }
    
  }
})
div.appendChild(button)
const a = document.createElement('a')
a.setAttribute('target', "_blank")
a.setAttribute('href', "https://www.google.com")
a.appendChild(document.createTextNode("google"))
div.appendChild(a)

// const img = document.createElement('img')
// img.setAttribute('src', "chrome://branding/content/about-logo@2x.png")
// div.appendChild(img)

const checkbox = document.createElement('input')
checkbox.setAttribute('type', "checkbox")
checkbox.onchange= (value) => {
  console.log("checked", value)
}
div.appendChild(checkbox)

document.body.appendChild(div);