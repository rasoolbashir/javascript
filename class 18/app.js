const bars = document.querySelector('#menuBtn')
const menu = document.querySelector('.menu')
const icons = document.querySelector('.socialsIcon')
window.onresize = resizeScreen

function resizeScreen() {
    if (window.innerWidth < 768){
        bars.style.display = 'block'
        menu.style.display = 'none'
        icons.style.display = 'none'
    }else{
        bars.style.display = 'none'
        menu.style.display = 'block'
        icons.style.display = 'block'
    }
    
}