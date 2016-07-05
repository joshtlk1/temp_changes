
var temp = prompt("What is the temp outside?");
console.log("Temperature outside is "+ temp);
var unit = prompt("What is the unit? Is it in 'C' or 'F'");
console.log("The unit is in " + unit);

	if (unit === 'F') {
		var newTempC = (temp - 32) / 1.8;
		console.log("The temperature outside is "+ newTempC +" degree Celsius");
	 if (newTempC < 0 ) {
		console.log("The temperature is "+ newTempC +" degree Celsius. It is below freezing point! What are you doing outside? Get in!!!");
	} else if (newTempC < 20) {
		console.log("The temperature is "+ newTempC +" degree Celsius. It is nice and warm, but not warm enough to go to the beach :D");
	} else if (newTempC <40 ) {
		console.log("The temperature is "+ newTempC +" degree Celsius. It is super nice outside, go for a run, hike, or whatever please you!");
	} else {
		console.log("The temperature is "+ newTempC +" degree Celsius. It is too hot, get in! Turn on the AC and chill");
	}
} else if (unit === 'C') {
		var newTempF = 1.8 * temp + 32;
	 if (newTempF < 32 ) {
		console.log("The temperature is "+ newTempF +" degree Celsius. It is below freezing point! What are you doing outside? Get in!!!");
	} else if (newTempF < 68) {
		console.log("The temperature is "+ newTempF +" degree Celsius. It is nice and warm, but not warm enough to go to the beach :D");
	} else if (newTempF <104 ) {
		console.log("The temperature is "+ newTempF +" degree Celsius. It is super nice outside, go for a run, hike, or whatever please you!");

	} else {
		console.log("The temperature is "+ newTempF +" degree Celsius. It is too hot, get in! Turn on the AC and chill");
	} 
}	else {
		console.log("Please enter either 'F' or 'C' as unit");
	};

	


