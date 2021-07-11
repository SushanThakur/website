const open = document.getElementById('open')
    close = document.getElementById('close')
    navbarmobile = document.getElementById('mobilenav')
    text1 = document.getElementById('text1')
    text2 = document.getElementById('text2')
    bg = document.getElementById('bgSection')
    videodiv = document.getElementById('videodiv')
    nav = document.querySelector('nav');

open.addEventListener('click', () => {
    nav.classList.add('active');
    open.classList.add('invisible');
    close.classList.add('visible');
    navbarmobile.classList.add('clicked');
    text1.classList.add('invisible');
    text2.classList.add('visible');
})

close.addEventListener('click', () => {
    nav.classList.remove('active');
    open.classList.remove('invisible');
    close.classList.remove('visible');
    navbarmobile.classList.remove('clicked');
    text1.classList.remove('invisible');
    text2.classList.remove('visible');
})

bg.addEventListener('click', () => {
    nav.classList.remove('active');
    open.classList.remove('invisible');
    close.classList.remove('visible');
    navbarmobile.classList.remove('clicked');
    text1.classList.remove('invisible');
    text2.classList.remove('visible');    
})

videodiv.addEventListener('click', () => {
    nav.classList.remove('active');
    open.classList.remove('invisible');
    close.classList.remove('visible');
    navbarmobile.classList.remove('clicked');
    text1.classList.remove('invisible');
    text2.classList.remove('visible');
})