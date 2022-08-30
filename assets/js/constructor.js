class Calculator{
    constructor(previousOutputTextEl, currentOutputTextEl) {
     this.previousOutputTextEl= previousOutputTextEl
     this.currentOutputTextEl= currentOutputTextEl
     this.clear()
    }
 
    clear(){
     this.currentOutput=''
     this.previousOutput=''
     this.operation= undefined
    }
    delete(){
    this.currentOutput=this.currentOutput.toString().slice(0, -1)
 
    }
    appendNumber(number){
       
        if(number === "." && this.currentOutput.includes(".")) return
        this.currentOutput=this.currentOutput.toString()+number.toString()
    }
    chooseOperation(operation){
        if(this.currentOutput===" ")return
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
        this.operation= undefined
        this.previousOutput=" "

    }
    getDisplayNumber(number){
        const stringNumber=number.toString()
        const intDigits=parseFloat(stringNumber.split('.')[0])
        const decimalDigits=stringNumber.split('.')[1]
        let intDisplay;

       if(isNaN(intDigits)){
        intDisplay=' '
       }else{
        intDisplay=intDigits.toLocaleString("en", {maximumFractionDigits:0})
       }
       if(decimalDigits != null){
        return `${intDisplay}.${decimalDigits}`
       }else{
        return intDisplay
       }
    }
    updateDisplay(){
        this.currentOutputTextEl.innerText = this.getDisplayNumber(this.currentOutput)
        if(this.operation != null){
            this.previousOutputTextEl.innerText=`${this.getDisplayNumber(this.previousOutput)} ${this.operation}`
        }else{
            this.previousOutputTextEl.innerText= ' '
        }
        
    }
 }
 