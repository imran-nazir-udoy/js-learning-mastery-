let button=document.querySelector("#btn")
button.addEventListener("dblclick",()=>
{
    document.querySelector(".box").innerHTML="<b>Yay you double clicked on it </b>"
})


// button.addEventListener("contextmenu",()=>
// {
//  alert("dont right click please");
// })

button.addEventListener("keydown",(e)=>
{

 console.log(e,e.key)
})


//event bubling:
/*when you do event listener on any object and also its parent then if you fire the event of the child than automatically parent will also be fired 
as child is a part of parent
to stop this 
parameter.stopPropagation();
use this into the function of event 
*/

//remove event listener same method
function name()
{
    let letter="123456789ABCDEF";
    let color="#";
    for(let i=0; i<6;i++)
    {
        color+=letter[Math.floor(Math.random()*16)]
    }
    return color;
}




setInterval(()=>
{
    document.querySelector("#btn").style.background=name()
},3000)

// setInterval(()=>
// {
//     document.querySelector("p").style.color=name();
// },3000)

setTimeout(()=>
{
    document.querySelector("p").style.color=name();
},1000)

//to stop
//clearInterval(1)
//clearTimeout(1)
