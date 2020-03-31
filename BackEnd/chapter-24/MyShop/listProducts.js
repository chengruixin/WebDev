var faker = require('faker');

console.log("==================\nwelcome to my shop \n==================");

var output;
for(var i = 0; i< 10; i++){
    output = faker.commerce.productName() + " - $" + faker.commerce.price();
    console.log(output);
}