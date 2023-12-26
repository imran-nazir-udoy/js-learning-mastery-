

let str="imran nazir udoy";
let st2="jdsk fsdkh fdfh";
console.log(str ,st2)
console.log(str.length)//finding the length of the string

//accessing the each element
console.log(str[4])
console.log(st2[14])

//template literals : embaded expression for makiing a string*****

let speacial_string=`This is a template literal `;

console.log(typeof speacial_string,"\t",speacial_string)//escape characters length is always one (1)

let ob=
{
    s:1222,
    p:"hello ",
    z:false,
};

let output=`this is p ${ob.p} and s ${ob.s} and z ${ob.z}`
console.log(output)//this is called template literals uses
// this is  called string interpullation****


