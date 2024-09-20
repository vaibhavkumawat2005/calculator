function press(value){
    const display = document.getElementById("display")
    display.value += value;

}


function clearAll(){
    const display = document.getElementById("display")
    display.value = '';
}

function calculate(value){
    const operator = document.getElementById("display")

    try{
        
        display.value = eval(display.value)

    }catch(error){
        display.value = "error"


    }
}