const menuIcon = document.querySelector('.hamburguer-menu');
const navbar = document.querySelector('.navbar')
const carrossel = document.querySelector('#dh_carousel')
//primeiro
const primeiro = document.querySelector('#primeiro')
const oOne = document.querySelector('#oOne')
oOne.innerHTML = "<h2> JavaScipt - O guia definitivo</h2> <p>Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web</p>"
var img = document.createElement("IMG");
img.src = "https://images-na.ssl-images-amazon.com/images/I/41ACA8-dKLL._SX348_BO1,204,203,200_.jpg";
img.style.width = "60%";
img.style.height = "40%";
img.style.position = "right"
oOne.appendChild(img);

const oTwo = document.querySelector('#oTwo')
oTwo.innerHTML = "<h2> JavaScipt - O guia definitivo</h2> <p>Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web</p>"

const oThree = document.querySelector('#oThree')
oThree.innerHTML = "<h2> JavaScipt - O guia definitivo</h2> <p>Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web</p>"

const oFour = document.querySelector('#oFour')
oFour.innerHTML = "<h2> JavaScipt - O guia definitivo</h2> <p>Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web</p>"

const oFive = document.querySelector('#oFive')
oFive.innerHTML = "<h2> JavaScipt - O guia definitivo</h2> <p>Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web</p>"

const oSix = document.querySelector('#oSix')
oSix.innerHTML = "<h2> JavaScipt - O guia definitivo</h2> <p>Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web</p>"

const card = document.querySelector('.showcase')


menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})

function teste() {
    alert("Nada encontrado no momento, tente novamente :(")
}

const overlay = document.querySelectorAll('.overlay')

for (let i = 0; i < overlay.length; i++) {
    overlay[i].style.background = "grey"
}