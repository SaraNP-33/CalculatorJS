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
        //statement to prevent multiple .
        if(number === "." && this.currentOutput.includes(".")) return
        this.currentOutput=this.currentOutput.toString()+number.toString()
    }
    chooseOperation(operation){
        if(this.currentOutput===" ")return
        //if we chain operations we want the operation to be executed before moving forward. 
        if(this.previousOutput !==" "){
            this.compute()
        }
        this.operation=operation
        this.previousOutput=this.currentOutput
        this.currentOutput=" "
    }
    compute(){
        let computation
        const prev =parseFloat(this.previousOutput)
        const current =parseFloat(this.currentOutput)

        if(isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case "+":
                computation =prev + current
                break;
            case "-":
                computation =prev - current
             break;
            case "*":
                computation =prev * current
            break;

            case "÷":
                computation =prev / current
            break;
        
            default:
                return
                
        }
        this.currentOutput=computation
        this.operation=undefined
        this.previousOutput=" "

    }
    updateDisplay(){
        this.currentOutputTextEl.innerText = this.currentOutput
        this.previousOutputTextEl.innerText=this.previousOutput
    }
 }
 