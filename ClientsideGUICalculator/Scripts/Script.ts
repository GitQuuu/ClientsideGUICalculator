function dis(val) {
    (<HTMLInputElement>document.getElementById("Result")).value += val;
    console.log(val);
}

function solve() {
    var x: string = (<HTMLInputElement>document.getElementById("Result")).value;
    var y : string= eval(x);
    (<HTMLInputElement>document.getElementById("Result")).value = y;
}

function clr() {
    (<HTMLInputElement>document.getElementById("Result")).value = "";
} 

// Bind enter (13) to solve inputfield
document.addEventListener("DOMContentLoaded", function() {
    var inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(("Result"));

    inputElement.addEventListener("keypress", function(e) {
        if (e.which == 13) {
            inputElement.value = eval(inputElement.value);
        }
    });
});