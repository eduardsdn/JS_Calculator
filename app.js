
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


let numbers = [one,two,three,four,five,six,seven,eight,nine,zero,dot]
let operators = [plus,minus,divide,multiply,dot]


let inputCollection = []
let inputNumber 
let operant 
let computed



numbers.forEach(item => {
    item.addEventListener('click', getNumber)
})

function getNumber() {

    if (this == one){
        inputCollection.push("1")
    }
    else if (this == two) {
        inputCollection.push("2")
    }
    else if (this == three) {
        inputCollection.push("3")
    }
    else if (this == four) {
        inputCollection.push("4")
    }
    else if (this == five) {
        inputCollection.push("5")
    }
    else if (this == six) {
        inputCollection.push("6")
    }
    else if (this == seven) {
        inputCollection.push("7")
    }
    else if (this == eight) {
        inputCollection.push("8")
    }
    else if (this == nine) {
        inputCollection.push("9")
    }
    else if (this == zero) {
        inputCollection.push("0")
    }
    else if (this == dot) {
        inputCollection.push(".")
    }

    inputNumber = inputCollection.join("")
    console.log(inputNumber)
    display.textContent = inputNumber
}


operators.forEach(item => {item.addEventListener('click', operate)
})

function operate() {
    
    operant = inputNumber
    inputCollection = []
    console.log(operant)

    if(this == plus) {
        equal.addEventListener('click', event => {
            computed = parseInt(operant) + parseInt(inputNumber)
            console.log(computed)
            display.textContent = computed
        })
    }
    else if(this == minus) {
        equal.addEventListener('click', event => {
            computed = parseInt(operant) - parseInt(inputNumber)
            console.log(computed)
            display.textContent = computed
        })
    }

}



