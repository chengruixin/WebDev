

function cap(str) {
	return str[0].toUpperCase() + str.slice(1);
}

var str = "ray";
str = cap(str);
alert(str);