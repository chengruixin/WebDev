// alert(Math.floor(Math.random()*50+100));

var min = Math.floor(Math.random()*999);
// alert("Min: "+min);

var max = min + Math.floor(Math.random()*9999);
// alert("Max: "+max);

var answer = Math.floor(Math.random()*(max-min) + min);

// alert("From "+min +" to " + max +" : "+answer);

var guess = prompt("PLease guess the number between "+min+" and "+max);


var tempMin = min;
var tempMax = max;

while(guess != answer){

	if(guess > answer) {
		tempMax = guess - 1;
		guess = prompt("you are guessing larger, PLease try that again between "+tempMin+" and "+tempMax);
	}

	else if(guess < answer){
		tempMin = Number(guess) + 1;
		guess = prompt("you are guessing smaller, PLease try that again between "+ tempMin +" and "+tempMax);
	}


}

alert("yeah you are guessing rgiht: "+answer);