const darkBtn = document.getElementById('darkBtn')
const lightBtn = document.getElementById('lightBtn')
function darkHandler(){
document.body.style.background='blue'
document.body.style.color='white'
lightBtn.style.display ='none'
lightBtn.style.display ='block'
}
function lightHandler(){
    document.body.style.background='white'
    document.body.style.color='black'
    lightBtn.style.display ='none'
    darkBtn.style.display ='block'
}