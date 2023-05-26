var display = document.getElementById("display");

function getValue(num){
    display.value += num;
}
function calculateValue(){
    var ans = eval(display.value);
    display.value = ans;
}
function clearAll(){
    display.value = "";
}
