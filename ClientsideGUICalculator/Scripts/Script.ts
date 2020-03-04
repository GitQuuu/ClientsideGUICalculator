function dis(val) {
    document.getElementById("Result").value += val;
    console.log(val);
}

function solve() {
    var x : string = document.getElementById("Result").value;
    var y : HTMLElement= eval(x);
    document.getElementById("Result").value = y;
}

function clr() {
    document.getElementById("Result").value = "";
} 