class parent {
    constructor() {
        this.species = "Homo Sapiens"
        console.log(this.species)
    }
    hello() {
        console.log("hello i am parent function > ")
    };

}
class child extends parent {
    child() {
        console.log("I am from child function")
    };


}



let inherit = new child();
inherit.hello(); //calling parent functions through my child class 
let inherits = new child();
inherits.child(1, 2);//calling childs functions through my child class 
