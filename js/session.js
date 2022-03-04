//Create Variable
let firstName = "Maryanne"
let lastName = "Nyambura"

let fullnames = firstName + " " + lastName //concacinat

console.log(fullnames)

//create function
let name = "Linda"
let greetings = "Hi there"

function welcome() {
    console.log(greetings + "," + " " + name + "!")
}

welcome()

//Increments and Decrement

let myPoints = 3

function addPoints(){
    //myPoints = myPoints + 3 thus use +=
    myPoints += 3
}
function removePoints(){
    //myPoints = myPoints - 1 thus use -=
    myPoints -= 1
}

addPoints()
addPoints()
addPoints()
removePoints()
removePoints()

console.log(myPoints)// call the functions to that myPoints log out 10

///// Strings & numbers
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("myPoints: " + 5 + 9) // myPoints: 59
console.log(2 + 2) //4
console.log("11" + "14") //1114

///Rendering an error message. Button click
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log ("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}
