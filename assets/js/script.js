
const numBtn = document.querySelectorAll("[data-number]")
const operationBtn= document.querySelectorAll('[data-operation]')
const delBtn= document.querySelector('[data-del]')
const allClear= document.querySelector('[data-all-clear]')
const equalBtn= document.querySelector('[data-equals]')
const previousOutputTextEl= document.querySelector('[data-previous]')
const currentOutputTextEl=document.querySelector('[data-current]')

const calculator= new Calculator(previousOutputTextEl,currentOutputTextEl)

numBtn.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationBtn.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalBtn.addEventListener("click", button=>{
    calculator.compute()
    calculator.updateDisplay()
})

allClear.addEventListener("click", button=>{
    calculator.clear()
    calculator.updateDisplay()
})
delBtn.addEventListener("click", button=>{
    calculator.delete()
    calculator.updateDisplay()
})