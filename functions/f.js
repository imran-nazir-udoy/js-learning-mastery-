// //function defination without parameter
// function myfunction()
// {
//     console.log("welcome to the apna college :")
// }
// //function calling 
// myfunction();


// //now with the parameter
// function with_parameter( a ,  b)
// {
//     return a+b;
// }

// let a,b;
// a=parseInt(prompt("enter the  a  : \n"))
// b=parseInt(prompt("enter the  b : \n"))
// console.log(with_parameter(a,b))

//arrow funtion .**********************
// let sum=(c,d)=>
// {
//     return c+d;
// }
// let k=sum(5,7)
// console.log(k)

// // .........for each..only for array its generally used for calculations

// let arr=["hello", "ji","ni"]//by arrow function
// arr.forEach((val)=>
// {
//     console.log(val);
// });

// arr.forEach(function printval(val)//by loop 
// {
//     console.log(val)
// })
// //with index and  arr 
// arr.forEach(function printval(val,idx, arr)//by loop 
// {
//     console.log(val,idx, arr)
// })

//higher order function which takes another function as parameter or return another function

// let n;
// n=parseInt(prompt("enter the size of the array : "));
// let arrr=[];
// for(let i=0;i<n;i++)
// {
//    arrr[i]= parseInt(prompt("enter the array : "))
// }
// arrr.forEach((values , idx , arrr)=>
// {
//     console.log(values*values , idx , arrr);
// });
// another way 
// let squares=(values,idx,arrr)=>
// {
//     console.log(values*values,idx ,arrr);
// }
// arrr.forEach(squares)

//map its used for made a new array
// let newarr=[1,2,3,4,5]
// let newarr=arrr.map((val)=>
// {
// return val*2;
// });
// console.log(newarr)

//filter method
// let a=[1,2,3,4,5]
// let ev=a.filter((val)=>//it uses for filtering some elements as per condition from an array and build an new array 
// {
//     if(val%2==0)
//     {
//         return val;
//     }
// });
// console.log(ev);
// //reduce method
// let output =a.reduce((pre,curr)=>
// {
//     // return pre+curr;//15
//     return pre>curr?pre:curr;//5
// })
// console.log(output)

let nn=prompt("enter a new number : ")
let az=[];
for(let i =0; i<nn;i++)
{
    az[i]=i;//you can leave it emty have to assign some values
}
console.log(az)
let output1=az.reduce((prev, curre)=>
{
    return prev+curre;
})

console.log(output1)




