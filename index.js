// document.getElementById("count").innerText = 34

// const { name } = require("ejs")


// let count = 0.5 * 8

// console.log(count)

// let myAge = 27
// let humanDogRatio = 4

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function number () {
//     console.log(42)
// }

// number ()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function Adore(){
//     lapsCompleted = lapsCompleted + 1
// }

// Adore()
// Adore()

// console.log(lapsCompleted)


// function increment() {
//     console.log("clicked")
// }


// let username = "Ricky"
// let message = "You have three new notifications"
// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let namer = "Queens"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + namer

// console.log(myGreeting)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
// save()

