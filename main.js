const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerIndexButton = document.querySelector('.header-index');
const index = document.querySelector('#index');
const indexButton = document.querySelector('.index-arrow');
const contactIndex = document.querySelector('.contact-index');
let scrollHeight = 0;
function indexHandler() {
    body.style.overflow = 'hidden';
    header.style.display = 'none';
    window.scrollTo(0, 0);
    index.style.top = '0';
}
headerIndexButton.addEventListener('click', () => {
    indexHandler();
})
indexButton.addEventListener('click', () => {
    index.style.top = '-1000px';
    body.style.overflow = 'inherit';
    header.style.display = 'flex';
})
contactIndex.addEventListener('click', () => {
    indexHandler();
})

const intro = document.querySelector('#intro-main3');
const main4Image1 = document.querySelector('.main4-image-1');
const main4Image2 = document.querySelector('.main4-image-2');
const main4Image3 = document.querySelector('.main4-image-3');
const simpleImage = document.querySelector('#simple');
const identityImage = document.querySelector('#identity');
const flexibleImage = document.querySelector('#flexible');
let checkForIntro = true;
let checkForTrend = true;
window.addEventListener('scroll', (event) => {
    const baseForIntro = window.screen.height * 3 - window.screen.height/2 ;
    if (main4Image1 && baseForIntro < window.scrollY && checkForIntro) {
        checkForIntro = false;
        main4Image1.style.top = '50px';
        main4Image2.style.top = '-120px';
        main4Image2.style.left = '43%';
        main4Image3.style.left = '-50%';
    } else if (main4Image1 && baseForIntro > window.scrollY) {
        main4Image1.style.top = '200px';
        main4Image2.style.top = '-100px';
        main4Image2.style.left = '-250px';
        main4Image3.style.left = '270px'; 
        checkForIntro = true;
    }
    const baseForTrend = window.screen.height - window.screen.height/2;
    if (simpleImage && baseForTrend <= window.scrollY && checkForTrend) {
        console.log("hello")
        checkForTrend = false;
        simpleImage.style.right = '0px';
        flexibleImage.style.right = '0px';
        identityImage.style.right = '0px';
    } else if (simpleImage && window.scrollY < 100) {
        checkForTrend = true;
        simpleImage.style.right = '100%';
        flexibleImage.style.right = '100%';
        identityImage.style.right= '100%';
    }
    
    
    
})
