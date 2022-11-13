const menu = document.querySelector('.main_navigation');
const menuChild = Array.from(menu.querySelectorAll('a'));

let activeItem = menu.querySelector('[aria-selected]')
console.log(activeItem)


const indicator = document.createElement('span');
indicator.classList.add('indicator')
menu.appendChild(indicator)

