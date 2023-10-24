const hamburger = document.querySelector('.navigation__hamburger');
hamburger.addEventListener('click', showNavigation);

function showNavigation() {
    const links = document.querySelector('.navigation__links');
    console.log(links);
    if (links.classList.contains('navigation__links--collapsed')) {
        console.log(`Removing collapsed nav class`);
        links.classList.remove('navigation__links--collapsed');
    }
    else {
        console.log(`Adding collapsed nav class`);
        links.classList.add('navigation__links--collapsed');
    }
}