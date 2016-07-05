
// var temp_F = 10;
// var temp_C = (temp_F - 32) / 1.8;
// console.log(temp_C);


// temp_F = 1.8 * temp_C + 32;
// console.log(temp_F);


function convertToC() {
	var temp_FVal = parseFloat(document.getElementById('temp_F').value);
	var temp_CVal = (temp_FVal - 32)/ 1.8;
	document.getElementById('temp_C').value = Math.round(temp_CVal);
	return false;
}

function convertToF() {
	var temp_CVal = parseFloat(document.getElementById('temp_C').value);
	var temp_FVal = (temp_CVal * 1.8) + 32;
	document.getElementById('temp_F').value = Math.round(temp_FVal);
	return false;
}

