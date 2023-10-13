// const item = document.getElementById('special')
// console.log(item.firstChild.nodeValue);
// console.log(item.textContent);

// const special = document.querySelector('.specila');
// console.log(special)

// const idkValues =special.getAttribute('id');
// special.setAttribute('id','specialOne')
// console.log(special)



const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'violet','orange','maroon','brown']

var colorName = document.querySelector('span')


function colorHandler() {
    const randomGeneratedNumber = Math.floor(Math.random() * 9)
    console.log("chal gaya")
    console.log(randomGeneratedNumber)
    colorName.textContent = colors[randomGeneratedNumber]
    document.body.style.backgroundColor = colors[randomGeneratedNumber]
}