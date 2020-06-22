const app = function () {
    const navButton = document.querySelector('.nav-btn');
    const navMenu = document.querySelector('#main-nav');

    const displayNavMenu = function () {
        const navIcon = navButton.querySelector('img');
        const overview = document.querySelector('.overview');

        if (!navMenu.classList.contains('show')) {
            navMenu.classList.add('show');
            navIcon.setAttribute('src', './images/icon-close.svg');
            overview.classList.add('menu-gradient');
        } else {
            navMenu.classList.remove('show');
            navIcon.setAttribute('src', './images/icon-hamburger.svg');
            overview.classList.remove('menu-gradient');
        }
    }

    navButton.addEventListener('click', displayNavMenu)
}

app();