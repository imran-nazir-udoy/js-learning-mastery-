//for loops
// for(let i=1;i<=5;i++)
// {
//     console.log("hello welcome to the loop section")
// }
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//while loop
// let i=0;
// while(i<5)
// {
//     console.log(i,"welcome to the while loop");
//     i++;
// }
//''''''''''''''''''''''''''''''''''''''''''''''''''''''
//do while 

// let i=9;
// do{
//     console.log(i,"welcome to the do while ")
//     i++
// }while(i<=24);

//.....................................
//for of loop : it uses in arrays and strings to iterate
let c=0;
for(let i of "imran")//intialization and increment of i is auto
{
    console.log("i= ",i)
    c++;
}
 console.log("string size is = ",c)//--> 5

//imran ---> output ---> i m r a n


//...........................................

//for in loop is mostly used in objects and arrays also 
let st=
{
    name: "udoy",
    age : 30,
    cgpa:7.5,
    ispass:true,
};

for(let key in st)
{
    console.log("key= ",key , "value =",st[key]);

}


//number guessing game
// let number=prompt("enter the game number : ")
// let ans=25;
// while(number!=ans)
// {
//     number=prompt("You entered wrong number please enter the correct number again : ");
// }
// console.log("congrtulation your guess was correct")