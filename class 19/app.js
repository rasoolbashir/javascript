// const first = document.querySelector('#one')
// const second = document.querySelector('#two')
// const third = document.querySelector('#three')


// console.log("==>>",first.className)
// first.setAttribute('class',"colors visible navbar")
// console.log("first==>>",first.className)
// console.log("first==>>",first.classList)

// first.className += " Rasool"
// first.classList += " Rasool"
// console.log("first",className)
// console.log("first",classList)


const result = document.querySelector('#result');

const bodyDiv =document.createElement('div');

const text =document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);
console.log(result.children);



