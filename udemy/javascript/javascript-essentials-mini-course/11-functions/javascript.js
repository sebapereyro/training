// Sample function
function Addition(num1, num2) {
	var total = (num1 * 3.14) + (num2 / 8);

	return total;
}

var newTotal = Addition(10, 15);
var newTotal2 = Addition(57, 1057);

console.log(newTotal, newTotal2);

function getName(){
	var nameElement = document.querySelector(".name");
	return nameElement.value;
}
