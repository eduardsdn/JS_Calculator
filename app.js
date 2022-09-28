


let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let zero = document.querySelector("#zero")

let divide = document.querySelector("#divide")
let multiply = document.querySelector("#multiply")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let dot = document.querySelector("#dot")
let equal = document.querySelector("#equal")

let clear = document.querySelector("#clearBtn")
let deleteBtn = document.querySelector("#deleteBtn")

let display = document.querySelector(".display")


let numbers = [one,two,three,four,five,six,seven,eight,nine,zero]

//box.textContent = 'New text'

let inputCollection = []

numbers.forEach(item => {
    item.addEventListener('click', event => {
        
        if (item == one){
            inputCollection.push("1")
        }
        else if (item == two) {
            inputCollection.push("2")
        }
        else if (item == three) {
            inputCollection.push("3")
        }
        else if (item == four) {
            inputCollection.push("4")
        }
        else if (item == five) {
            inputCollection.push("5")
        }
        else if (item == six) {
            inputCollection.push("6")
        }
        else if (item == seven) {
            inputCollection.push("7")
        }
        else if (item == eight) {
            inputCollection.push("8")
        }
        else if (item == nine) {
            inputCollection.push("9")
        }
        else if (item == zero) {
            inputCollection.push("0")
        }

        inputString = inputCollection.join("")


        // console.log(inputString)
        // console.log(inputCollection)

        display.textContent = inputString
    })
})


