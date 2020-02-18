// var num1 = -10;
// while(num1 <= 19){
// 	console.log(Number(num1));
// 	num1++;
// }


// console.log("--------------------------");
// var num2 = 10;
// while(num2 <= 40){
// 	console.log(num2);
// 	num2 += 2;
// }

// console.log("--------------------------");

// var num3 = 300;
// num3++;
// while(num3 <= 333){
// 	console.log(num3);
// 	num3 += 2;
// }

// console.log("--------------------------");

// var num4 = 5;
// while(num4 <= 50){
// 	if(num4 % 15 === 0){
// 		console.log(num4);
// 	}

// 	num4 += 5;
// }

for(var i=-10;i<=19;i++){
	console.log(i);
}

console.log("--------------------------");

for(i = 10;i<=40;i+=2){
	console.log(i);
}


console.log("--------------------------");


for(i = 300;i<=333;i++){
	if(i%2 === 1){
		console.log(i);
		i++;
	}

	

}

for(i = 5;i<=50;i++){
	if(i%15 === 0){
		console.log(i);
		i+= 14;
	}

}

console.log("this is end");