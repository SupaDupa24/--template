let hero = document.getElementbyID('hero');
let button = document.getElementById('button');

function hideHero () {
    document.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight-200)
            hero.hidden = true;

    }
    )}

hideHero();