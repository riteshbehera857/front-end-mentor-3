const menuBtn = document.querySelector('.hamburger')

const mobileMenu = document.querySelector('.nav__mobile')

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})