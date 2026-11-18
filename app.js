let button = document.querySelector('.hamburger')
let hamContent = document.querySelector('.hamburger-content')
let ul = hamContent.querySelector('ul')
let navbar = document.querySelector('.navbar')

button.addEventListener('click', function () {
    hamContent.classList.toggle('show')
    ul.classList.toggle('active')
})

function reportWindowSize() {
    if (window.innerWidth > 1370) {
        hamContent.classList.remove('show')
    }
}