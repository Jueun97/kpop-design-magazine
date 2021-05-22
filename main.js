const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerIndexButton = document.querySelector('.header-index');
const index = document.querySelector('#index');
const indexButton = document.querySelector('.index-arrow');
let scrollHeight = 0;
headerIndexButton.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    header.style.display = 'none';
    window.scrollTo(0, 0);
    index.style.top = '0';
})
indexButton.addEventListener('click', () => {
    index.style.top = '-1000px';
    body.style.overflow = 'inherit';
    header.style.display = 'flex';
})
/* window.addEventListener('scroll', (event) => {
    scrollHeight = window.scrollY;
    console.log(scrollHeight)

}) */