var colors =["white"];

function dHandler(){
    var colorchange = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[colorchange]
    var num = document.getElementById("play");
    var check = num.innerHTML;
    --check;
    console.log(check);
    document.getElementById("play").innerHTML = check;
}
dHandler()
function rHandler(){
    var num = document.getElementById("play");
    document.getElementById("play").innerHTML = 0;
    document.body.style.backgroundColor = "white"
}
rHandler()
function iHandler(){
    var colorchange = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[colorchange]
    var num = document.getElementById("play");
    var check = num.innerHTML;
    ++check;
    document.getElementById("play").innerHTML = check;
}
iHandler()



// function iHandler(){
//     console.log("iHandler",number.textcontant)
//     number.textcontant = +(number.textcontant) + 1
// }

// function dHandler(){
//     console.log("dHandler",number.textcontant)
//     number.textcontant = +(number.textcontant) - 1
// }

// function rHandler(){
//     console.log("rHandler",number.textcontant)
//     number.textcontant = 0
// }