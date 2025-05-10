const a = document.getElementById('ham-1');
const b = document.getElementById('ham-2');
const c = document.getElementById('ham-3');
const ham = document.getElementById('hamburger-menu');
const nl = document.getElementById('nav-links');
const button = document.getElementById('button')
const nav = document.getElementById('navbar');

function togglenav(){
    nl.classList.toggle('max-sm:hidden');
    button.classList.toggle('max-sm:hidden');
    nav.classList.toggle('h-44')
    nav.classList.toggle('h-14')
    b.classList.toggle('opacity-0')
    a.classList.toggle('rotate-45')
    a.classList.toggle('top-[10px]')
    c.classList.toggle('bottom-[5px]')
    a.classList.toggle('relative')
    c.classList.toggle('relative')
    c.classList.toggle('rotate-[-45deg]')
}


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    
    button.classList.toggle('active');
    
    if (button.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
        accordionContent.style.maxHeight = 0;
    }
    

    });
    });
    AOS.init();
    