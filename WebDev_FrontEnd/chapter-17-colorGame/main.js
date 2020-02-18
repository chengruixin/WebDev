//elements represented by variables
var blockArea = document.querySelector("#blockArea"); //the place when game is palying around
var newColors = document.querySelector("#newColors");
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");
var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var title = document.querySelector(".title");
var titleHead = document.querySelector("#title_h");
var message = document.querySelector("#message");
//variables
var colorArray;
var answerIndex;
var blocks; // three or six blocks that might be cleared when game re-started;


//init
var mode = "hard";
regenerate();



//functions
function regenerate(){
	//initial reset part
	blockArea.innerHTML = "";
	title.style.backgroundColor = "steelblue";
	newColors.textContent = "New Colors";
	message.textContent = "";
	if(mode === "easy"){
		colorArray = [[],[],[]];
		for(var i=0;i<=2;i++){
			//create three color blocks
			blockArea.innerHTML += "<div class='colorBlock'></div>";

			//get random colors stored in colorArray
			for(var j = 0;j<3;j++){
				colorArray[i].push(Math.floor(Math.random()*255));
			}


		}

		// Assign color to these three blocks 
		//  And add events to each block
		blocks = document.getElementsByClassName('colorBlock');
		for(var i=0;i<blocks.length;i++){
			blocks[i].style.background = "RGB(" + colorArray[i][0]+", " + colorArray[i][1] +", " + colorArray[i][2] +")";
			
			//add event listener
			blocks[i].addEventListener("click",guess);
		}

		//random pick one color as the answer color
		answerIndex = Math.floor(Math.random()*3);
		red.innerHTML = colorArray[answerIndex][0];
		green.innerHTML = colorArray[answerIndex][1];
		blue.innerHTML = colorArray[answerIndex][2];
	}

	else if(mode === "hard"){
		colorArray = [[],[],[],[],[],[]];
		for(var i=0;i<=5;i++){
			//create six color blocks
			blockArea.innerHTML += "<div class='colorBlock'></div>";
			
			//get random colors stored in colorArray
			for(var j = 0;j<3;j++){
				colorArray[i].push(Math.floor(Math.random()*255));
			}
		}

		//assign color to these six blocks
		//  And add events to each block
		blocks = document.getElementsByClassName('colorBlock');
		for(var i=0;i<blocks.length;i++){
			blocks[i].style.background = "RGB(" + colorArray[i][0]+", " + colorArray[i][1] +", " + colorArray[i][2] +")";
			
			//add event listener
			blocks[i].addEventListener("click",guess);
		}


		//random pick one color as the answer color
		answerIndex = Math.floor(Math.random()*6);
		red.innerHTML = colorArray[answerIndex][0];
		green.innerHTML = colorArray[answerIndex][1];
		blue.innerHTML = colorArray[answerIndex][2];
	}

	//console.log(colorArray);
}

function guess() {
	
	if(this.style.backgroundColor ===titleHead.textContent.toLowerCase()){
		//display "Success!" message
		message.textContent = "Success!";

		//set all blocks to the same color
		for(var i = 0; i < blocks.length; i++){
			if(blocks[i].style.backgroundColor != this.style.backgroundColor){
				blocks[i].style.backgroundColor = this.style.backgroundColor;
			}
		}
		//set background to the same color
		title.style.backgroundColor = this.style.backgroundColor;

		//change "New Colors" btn to "Play Again?"
		newColors.textContent = "Play Again?";
	}
	else {
		message.textContent = "Try Aagin";
		this.style.background = "rgb(30, 30, 30)";
	}
}


// Adding triggers
easyMode.addEventListener("click", function(){
	mode = "easy";

	//highlight easy mode button
	easyMode.style.background = "steelblue";
	easyMode.style.color = "white";

	//shed hard mode button
	hardMode.style.background = "white";
	hardMode.style.color = "steelblue";
});

hardMode.addEventListener("click", function(){
	mode = "hard";

	//highlight hard mode button
	hardMode.style.background = "steelblue";
	hardMode.style.color = "white";

	//shed easy mode button
	easyMode.style.background = "white";
	easyMode.style.color = "steelblue";
});

easyMode.addEventListener("click",regenerate);
hardMode.addEventListener("click", regenerate);
newColors.addEventListener("click", regenerate);
// // new color trigger
// newColor.addEventListener("click",regenerate);