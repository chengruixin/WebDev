function isset(input){
    return typeof input != "undefined";
    //if(typeof input != undefined){
    //    console.log("isDefined");
    //}
}
var result;
var new_b="fasd";
try{
    result = isset(new_b);
}
catch(e){
    result = false;
}
console.log(result);
    //try 
    //{
    //    // Referencing a function that does not exist cause an exception
    //    console.log(sayHello());
    //    // Since the above line causes an exception, the following line will not be executed
    //    console.log("This line will not be executed");
    //}
    //// When an exception occurs, the control is transferred to the catch block
    //catch (e) 
    //{
    //    console.log("Description = " + e.description + "[br/]");
    //    console.log("Message = " + e.message + "[br/]");
    //    console.log("Stack = " + e.stack + "[br/][br/]");
    //}
    //finally 
    //{
    //    console.log("This line is guaranteed to execute");
    //}
