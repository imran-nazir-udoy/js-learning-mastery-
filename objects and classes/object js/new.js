const student=
{
    names:"Imran Nazir Udoy",
    Id:22303286,
    //declaring function inside an object
    Print:function()
    {
        console.log("marks :",names);
    },


};

const calctask=
{
    //declaring function inside an object method 1
    calc()
    {
        console.log("Task Rate is 10 percent. method 1")
    },
       //declaring function inside an object method 2
      calc2: function()
       {
           console.log("Task Rate is 10 percent. method 2")
       },
};

const newem=
{
    salary:100000,
    calc2: function()
    {
        console.log("Task Rate is 20 percent. method 2")
    },
    
}

//if you want to you another objects function in any other objects so you have to use prototype
//syntax (obj name .__proto__= old obj)

newem.__proto__=calctask;
