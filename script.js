
var total = 0
var x = 0
function dice() {
x = Math.floor(Math.random() * 5 + 1);
document.getElementById("dOutput").innerHTML = x
total += x
 document.getElementById("dTotal").innerHTML = total
}
//document.getElementById("dTotal").innerHTML = total