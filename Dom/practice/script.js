let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let newgame=document.querySelector(".new")
let messege=document.querySelector(".messege")
let ms=document.querySelector(".ms")

let first_turn = true;
const win_pattern =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]

    ];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        console.log("box was clicked")
       if(first_turn)
       {
        box.innerText="0"
        first_turn=false;
       }
       else
       {
        box.innerText="X"
        first_turn=true;
       }
        box.disabled=true
        winnint_pattern();
    })
})
const show_winner=(winner)=>
{
    messege.innerText=`congratulations ${winner}`
    messege.classList.remove("hide")
    document.getElementsByTagName('p').style.fontHeight="1000"
}
//winning pattern findings
const winnint_pattern=()=>
{
    for(pattern of win_pattern)
    {
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
    }
    let pos1=boxes[pattern[0]].innerText
    let pos2=boxes[pattern[0]].innerText
    let pos3=boxes[pattern[0]].innerText

   if(pos1!="" && pos2!="" && pos3!="")
   {
    if(pos1===pos2 && pos2===pos3)
    {
        console.log("winner of the game ",pos1)
        show_winner(pos1)
    }
   }
}