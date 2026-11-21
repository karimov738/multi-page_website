let button = document.querySelector('.hamburger')
let hamContent = document.querySelector('.hamburger-content')
let ul = document.querySelector('ul')
let navbar = document.querySelector('.navbar')

button.addEventListener('click', function () {
    hamContent.classList.toggle('show')
    ul.classList.toggle('active')

})

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0px 1px 15px 0px #fdf1ff';
        // hamContent.style.boxShadow = '0px 1px 15px -10px #6b6b6b';
    }
    else {
        navbar.style.boxShadow = 'none';
    }
})

function reportWindowSize() {
    if (window.innerWidth > 830) {
        hamContent.classList.remove('show')
        ul.classList.remove('active')
    }
}

window.onresize = reportWindowSize