// let arr=["hello", "hi", "how"  , "where"];
// console.log(arr)
// console.log(arr.length)
// console.log(typeof(arr))//object
//array is speacial type of object

//array is mutable  :
//string is not mutable : 

//loop overing on array

let az=[1,2,3,4,5,6,7,8];

//using for loop
// for(let i=0;i<az.length;i++)
// {
// console.log(az[i]);
// }

//now for of loop 
// for(let el of az)
// {
//     console.log( "the for of loop " ,el);
// }


//avg
let n=prompt("enter the size of the array : \n");
let arrr=[ ];

for(let i=0 ; i<n;i++)
{
    arrr[i] = parseInt(prompt("enter the elements : ",i+1 +" : "));
}
let s=0;
for(let j of arrr)
{
    s+=j;
}

let avg=parseFloat(s/n);
console.log(avg);



