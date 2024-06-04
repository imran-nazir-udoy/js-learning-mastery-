//class give a blueprint or template to make or creating objects
//constructor is a reserved keyword
//which is automatically invoked by new  and creates or intialze any objects

class myfirst_class_in_js {

    constructor(a, b) {
        console.log("new object has created")
        this.res = a * b;
        console.log(this.res);
    }
    start() {
        console.log("start function")
    }
    stop() {
        console.log("stop function")
    }
    addfunction(a, b) {
        this.start()
        this.result = a + b;

        this.stop()
        return this.result;
    }
}
//calling the function in the class syntax
// let variable name = new classname();
let called_cons = new myfirst_class_in_js(9, 10);
console.log(called_cons)
let calling_function = new myfirst_class_in_js(10, 12);
console.log(calling_function)
let g = calling_function.addfunction(8, 11)
console.log(g)
