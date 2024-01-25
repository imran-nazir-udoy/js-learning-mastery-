//class give a blueprint or template to make or creating objects
//constructor is a reserved keyword
//which is automatically invoked by new  and creates or intialze any objects

class myfirst_class_in_js
{
    
    constructor(a=6,b=87)
    {
        console.log("new object has created")
        this.res=a*b;
        console.log( this.res);
    }
    start()
    {
        console.log("start function")
    }
    stop()
    {
        console.log("stop function")
    }
    addfunction(a,b)
    {
        this.result=a+b;
        return this.result;
    }
}
//calling the function in the class syntax
// let variable name = new classname();

let calling_function= new myfirst_class_in_js();
let g=calling_function.addfunction(8,11)
console.log(g)
