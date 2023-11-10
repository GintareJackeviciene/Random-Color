const btn =document.querySelector(".btn")
const colorCode = document.querySelector(".span")
const body = document.querySelector("body")

const generateHexColor = () =>{
    const randomColor = Math.random().toString(16).slice(2,8)
body.style.backgroundColor = "#"+ randomColor
colorCode.textContent = "#" + randomColor 
}
btn.addEventListener("click", generateHexColor)

body.addEventListener("mousewheel", generateHexColor)