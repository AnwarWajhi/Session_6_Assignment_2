var n1 = parseFloat(prompt("Enter first number"));
var n2 = parseFloat(prompt("Enter 2nd number"));
var n3 = parseFloat(prompt("Enter 3rd number"));


if ((typeof n1 == "number") && (typeof n2 == "number")&&(typeof n3 == "number")){
var largest = n1;

	if (n2>largest) largest = n2;
	if (n3> largest) largest = n3;

	console.log("Largest number entered is "+largest);
}
else
console.log("Not a number");