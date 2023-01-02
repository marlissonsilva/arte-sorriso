// MENU MOBILE
const btnMobile = document.querySelector('#menu_hamburguer')
function showMenu(event) {
      if (event.type === 'touchstart') event.preventDefault()
      const nav = document.querySelector('.nav')
      nav.classList.toggle('active')
      document.body.style.overflow = 'hidden'
}
btnMobile.addEventListener('touchstart', showMenu)
btnMobile.addEventListener('click', showMenu)

// HIDE MENU ON CLICK
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
      item.addEventListener('click', hideMenu);
})

function hideMenu(event) {
      if (event.type === 'touchstart') event.preventDefault()
      const nav = document.querySelector('.nav')
      nav.classList.remove('active')
}


// SCROLL MENU
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

// 

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
      const windowTop = window.pageYOffset + (window.innerHeight * 0.75); // sabendo a altura da pagina
      target.forEach(function (element) {
            if ((windowTop) > element.offsetTop) {
                  element.classList.add(animationClass)
            }
            else {
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

// let btnWhats = document.querySelector('#btn-whats img');

// function hover(event) {
//       if (event.type === 'mouseenter');
//       const textWhats = document.getElementById('text-whats');
//       textWhats.style.visibility = 'visible';
//       textWhats.style.transition = '.6s';
// }
// function removeHover(event) {
//       if (event.type === 'mousedown');
//       const textWhats = document.getElementById('text-whats');
//       textWhats.style.visibility = 'hidden';
//       textWhats.style.transition = '.3s';

// }

// btnWhats.addEventListener('mouseenter', hover);
// btnWhats.addEventListener('mouseout', removeHover)



// document.getElementById('contatoForm').addEventListener('submit', function () {
//       var nome = this.querySelector('input[name=nome]'), nome = nome.value;
//       var email = this.querySelector('input[name=email]'), email = email.value;
//       var texto = ''+ email;
//       this.querySelector('input[name=Body]').setAttribute('value', texto);
//   });



