const btnMobile = document.querySelector('#btn-mobile')
function showMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('.nav')
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }

}
btnMobile.addEventListener('touchstart', showMenu)
btnMobile.addEventListener('click', showMenu)

const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', hiddenMenu);
})

function hiddenMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('.nav')
    nav.classList.remove('active')
    document.body.style.overflow = 'visible'
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollClick);
})

function scrollClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 65,
        behavior: "smooth",
    })
}

// ========================================================

// ========================================================

// botao do whatsap

let btnWhats = document.querySelector('#btn-whats img');

function hover(event) {
    if (event.type === 'mouseenter');
    const textWhats = document.getElementById('text-whats');
    textWhats.style.visibility = 'visible';
    textWhats.style.transition = '.5s ease';
}
function removeHover(event) {
    if (event.type === 'mousedown');
    const textWhats = document.getElementById('text-whats');
    textWhats.style.visibility = 'hidden';
    // textWhats.style.transition = '.5s';

}

btnWhats.addEventListener('mouseenter', hover);
btnWhats.addEventListener('mouseout', removeHover)

// ========================================================

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    };
};


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.65); // sabendo a altura da pagina
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll() // garantir que a funçao seja executada logo ao entrar na página


if (target.length) { // verificar se tem itens dentro do target
    window.addEventListener('scroll', debounce(function () {
        animeScroll()
    }, 20));


}





