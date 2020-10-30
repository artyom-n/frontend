const hamburger = document.querySelector('.js-hamburger')
const nav = document.querySelector('.js-navigation')
/*const nav_cont = document.querySelector('.js-nav-cont')*/

let hamburgerToggle = 1

hamburger.addEventListener('click', () => {
    if (hamburgerToggle > 0) {
        nav.classList.add('active')
        document.querySelector(".js-hamburger").innerHTML = "x";
    } else {
        nav.classList.remove('active')
        /*nav_cont.classList.add('hide')*/
        document.querySelector(".js-hamburger").innerHTML = "=";
    }
    hamburgerToggle = hamburgerToggle * -1
})