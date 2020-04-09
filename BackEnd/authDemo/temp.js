console.log("hello");
const obs = [
    {
        name: "abc",
        age: 25,
        printMe: function(){
            console.log("Name: " + this.name + " Age: " + this.age);
        }
    },
    {
        name: "cde",
        age:26,
        printMe: function(){
            console.log("Name: " + this.name + " Age: " + this.age);
        }
    },
    {
        name: "poed",
        age: 27,
        printMe: function(){
            console.log("Name: " + this.name + " Age: " + this.age);
        }
    }
];

const passport = {
    
    getObj: function(index){
        return obs[index];
    }
}

passport.getObj(0).printMe();

