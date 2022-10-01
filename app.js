
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
let operators = [plus,minus,divide,multiply]


let inputCollection = []
let inputNumber 
let storedInputNumber 
let computed 
let operatorTimesClicked = 0
let currentOperator


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
    console.log(`InputNumber ${inputNumber}`)
    display.textContent = inputNumber
}


operators.forEach(item => {item.addEventListener('click', event => {

    if(this == plus){
        currentOperator = "add"
    }

    if(operatorTimesClicked = 0) {
        operateFirstTime(event.target)
        operatorTimesClicked ++
    }
    else if(operatorTimesClicked > 0) {
        operateFurther(this)
        operatorTimesClicked ++
    }
})
})

function operateFirstTime(event) {
    console.log('FirstTime')
    storedInputNumber  = inputNumber
    inputCollection = []
    console.log((`storedInputNumber ${storedInputNumber}`))

    if(event.target == plus) {
        plus.addEventListener('click', event => {
            computed = parseFloat(storedInputNumber) + parseFloat(inputNumber)
            console.log(computed)
            display.textContent = computed
        })
    }
}

function operateFurther(){
    console.log('Further')
}












// function operate() {

//     if(computed == 0) {
//         storedInputNumber  = inputNumber
//         inputCollection = []
//         console.log((`storedInputNumber ${storedInputNumber}`))

//         if(this == plus) {

//             plus.addEventListener('click', event => {
//                     computed = parseFloat(storedInputNumber) + parseFloat(inputNumber)
//                     console.log(computed)
//                     display.textContent = computed
//                 })
            
                
//             }
//         }

    

//     else if(computed != 0) {

//         if(this == plus) {

//             plus.addEventListener('click', event => {
//                     computed = parseFloat(computed) + parseFloat(inputNumber)
//                     console.log(computed)
//                     display.textContent = computed
//                 })
            
                
//             }
//     }




    //     else if(this == minus) {
//         equal.addEventListener('click', event => {
//             computed = parseFloat(storedInputNumber) - parseFloat(inputNumber)
//             console.log(computed)
//             display.textContent = computed
//         })
//     }
//     else if(this == divide) {
//         equal.addEventListener('click', event => {
//             computed = parseFloat(storedInputNumber) / parseFloat(inputNumber)
//             console.log(computed)
//             display.textContent = computed
//         })
//     }
//     else if(this == multiply) {
//         equal.addEventListener('click', event => {
//             computed = parseFloat(storedInputNumber) * parseFloat(inputNumber)
//             console.log(computed)
//             display.textContent = computed
//         })
//     }
    




