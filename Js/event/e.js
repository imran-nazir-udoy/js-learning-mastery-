let bt1=document.querySelector('#bt1')
bt1.onclick=()=>
{
    console.log("button was clicked")
};

function handleMouseOver() {
    console.log("you have hovered on the div");
}

let first1 = document.querySelector('.first');

// Assign the function to a variable


// Use the variable as an event handler
first1.onmouseover = handleMouseOver;
let v='light'
let b=document.querySelector('body')
b.onclick=()=>
{
   if(v==='light')
   {
    v='dark'
    b.classList.remove("white");
    b.classList.add("dark");
   }
   else 
   {
    v='light'
    // b.style.backgroundColor=('white')
 
    b.classList.remove("dark");
    b.classList.add("white");
   }
}

