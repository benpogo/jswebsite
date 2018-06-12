

function dice() {
var total = 0
var x = Math.floor(Math.random() * 5 + 1);
document.getElementById("dOutput").innerHTML = x
 document.getElementById("dTotal").innerHTML = total + x
}
