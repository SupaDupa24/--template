let hero = document.getElementById('hero');
let button = document.getElementById('button');

function hideHero () {
    document.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight-200)
            hero.style = none;

    }
    )}


function boomer () {
   console.log('boom'); 
} 

hideHero();