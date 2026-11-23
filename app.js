let button = document.querySelector('.hamburger')
let hamContent = document.querySelector('.hamburger-content')
let ul = document.querySelector('ul')
let navbar = document.querySelector('.navbar')
// const links = document.querySelectorAll('.nav-link')
//debugger

button.addEventListener('click', function () {
    hamContent.classList.toggle('show')
    ul.classList.toggle('active')
})


const links = document.querySelectorAll('.navbar a');
//debugger

links.forEach(link => {
    //debugger
    if(window.location.pathname == '/index.html'){
        if(link.pathname == '/blog.html') {
            link.classList.add('link-active')    // hell code
        }
    } else {
        if (link.pathname === window.location.pathname) {
            //debugger
            link.classList.add('link-active');
            //debugger
        }
    }
    if(window.location.pathname == '/contact.html'){
        link.classList.remove('link-active')
    }
    
    //  debugger

    // if(window.location.pathname === '/index.html'){
    //     link.classList.add('link-active')
    // }
});

//debugger

// links.forEach(link => {
//     //debugger
//     if(link.pathname === window.location.pathname){
//         //debugger
//         link.classList.add('link-active')
//         //debugger
//     }
// });
//debugger

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
    if (window.innerWidth > 850) {
        hamContent.classList.remove('show')
        ul.classList.remove('active')
    }
}

window.onresize = reportWindowSize


