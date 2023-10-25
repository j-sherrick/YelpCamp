const toggleButton = document.querySelector('.navigation__toggle-button');

toggleButton.addEventListener('click', (e) => {
    console.log('button clicked');
    const navLinks = document.querySelector('.navigation__items');
    navLinks.classList.toggle('navigation__items--active');
})