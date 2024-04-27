//calcalator

function addValue(num) {
    var inputField = document.getElementById("inputField")
        inputField.value += num
    }
    //FUNCTION RESULT
    function result() {
        var inputField = document.getElementById("inputField")
        inputField.value = eval(inputField.value)
    }
    
    //FUNCTION ALL CLEAR
    function allClearValue() {
    
        var inputField = document.getElementById("inputField")
        inputField.value = ""
    }
    
    //FUNCTION SINGLE CLEAR
    function singleClearValue() {
    
        var inputField = document.getElementById("inputField")
        inputField.value = inputField.value.slice(0, -1)
    }