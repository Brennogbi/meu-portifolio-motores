

let btnmenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-celular")
let orveley = document.getElementById("overley-menu-celular")

btnmenu.addEventListener("click", ()=>{

menu.classList.add("abrindo-menu")

})
menu.addEventListener("click", ()=>{

menu.classList.remove("abrindo-menu")

})
orveley.addEventListener("click", ()=>{

menu.classList.remove("abrindo-menu")

})