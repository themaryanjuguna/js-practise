let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

//console.log(saveEl)

function increment() {
   count += 1
   countEl.textContent = count //text content replaces innerText because it swallows spaces 
} 

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
        
}