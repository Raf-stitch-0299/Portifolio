const menuHamburger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');


menuHamburger.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

const chk = document.getElementById('chk')


chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

