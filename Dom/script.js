// console.dir(document.head)
// console.log(document.head)
// console.log(window)
// console.dir(document.body)
// console.log(document.body)
// console.log(document.body)
// document.title="title is changed by the js"
// console.log(document.all)
//it is looked like an array but not an array it is an object;
//but you can loop it like an array
// for(let element of document.all)
// {
//     console.log(element)
// }
//it is not an appropiate way it is a static way not a dynamic array

//traversing through elements by dom

//1. get _ element _ by _ id :
// let ff = (document.getElementById("f4"));
// ff. innerText= "to do list";
// ff.textContent 
//both same but innercontext give the final output and textconent gives only the html output


//2. get _ element _ by _ class :
// console.log(document.getElementsByClassName("f1"))

//3. get _ element _ by _ tagname :
// console.log(document.getElementsByTagName("h1"))


//3. get _ element _ by _ query_selector :
// console.log(document.querySelector(".f1"))
// let lasti=document.querySelector('.f1:nth-child(3');
// console.log(lasti)
// lasti.style.color='red'
// const divelement=document.createElement('div')
// console.log(divelement)
// divelement.className='div_by_js'

// divelement.setAttribute('id','red')

//selecting all the elements and assiging them variables
let newtask=document.querySelector('#new-task')
let from=document.querySelector('form')
let todoUl=document.querySelector('#items')
let completeul=document.querySelector('.complete-list ul')

//nececary functions
let createtask=function(task)
{
let listitem=document.createElement('li')
let checkbox=document.createElement('input')
let label=document.createElement('label')

label.innerText=task
checkbox.type='checkbox'
listitem.appendChild(checkbox)
listitem.appendChild(label)

return listitem;
}

//adding task function
let addtask=function(event){
    event.preventDefault()
    let listitem=createtask(task)
}

