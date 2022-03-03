// // document.getElementById("count-el").innerText = 10
// //store data

let countEL = document.getElementById("count-el")

console.log(countEL)

let count = 0

function increment() {
    count = count + 1
    countEL.innerText = count
} 

increment()