
function dis(val) {
    document.getElementById("Result").value += val;
}

function solve() {
    var x = document.getElementById("Result").value;
    var y = eval(x);
    document.getElementById("Result").value = y;
} 

function clr() {
    document.getElementById("Result").value = "";
} 