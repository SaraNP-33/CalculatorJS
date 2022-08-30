class Calculator{
    constructor(previousOutputTextEl, currentOutputTextEl) {
     this.previousOutputTextEl= previousOutputTextEl
     this.currentOutputTextEl= currentOutputTextEl
     this.clear()
    }
 
    clear(){
     this.currentOutput=''
     this.previousOutput=''
     this.operation=undefined
    }
    delete(){
 
    }
    appendNumber(number){
        this.currentOutput=number
    }
    chooseOperation(operation){
 
    }
    compute(){
 
    }
    updateDisplay(){
        this.currentOutputTextEl.innerText = this.currentOutput
    }
 }
 