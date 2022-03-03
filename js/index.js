let countEL = document.getElementById("count-el")
console.log(countEL)
let count = 0
function increment() {
    count = count + 1
    countEL.innerText = count
} 

function save() {
    console.log(count)
}

let username = "Jans"
let message = "You have 3 new notifications"

console.log(message + ", " + username + "!")

let messageToUser = message + "," + username + "!"

console.log(messageToUser)

let greetings = "Hi, my name is "
let name = "Maryanne"

let myGreeting = greetings + name 
console.log(myGreeting)

console.log(4 + 5) //9
console.log("2" + "4") //24
console.log("5" + 1) //51
console.log(100 + "100") //100100
