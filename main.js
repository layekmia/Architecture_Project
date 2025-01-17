const menuBar = document.querySelector('.menu-bars');
const ul = document.querySelector('.menu');

menuBar.addEventListener('click', ()=>{
    ul.classList.toggle('menu-show')
})