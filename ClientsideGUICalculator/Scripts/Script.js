function dis(val) {
    document.getElementById("Result").value += val;
    console.log(val);
}
function solve() {
    var x = document.getElementById("Result").value;
    var y = eval(x);
    document.getElementById("Result").value = y;
}
function clr() {
    document.getElementById("Result").value = "";
}
// Bind enter (13) to solve inputfield
document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.getElementById(("Result"));
    inputElement.addEventListener("keypress", function (e) {
        if (e.which == 13) {
            inputElement.value = eval(inputElement.value);
        }
    });
});
//# sourceMappingURL=Script.js.map