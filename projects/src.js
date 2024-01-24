let userscore = 0;
let compscore = 0;
const choices = document.querySelector(".box1")
const choices2 = document.querySelector(".box2")
const choices3 = document.querySelector(".box3")

const compchoice=()=>
{
const options=["rock", "paper" , "Scissor"];
const randindx=Math.floor((Math.random())*3);
return options[randindx];
}

const playgame=(userChoice1)=>
{
    console.log("user choice", userChoice1);
    

    const com=compchoice();
    console.log("computer choice",com);
}



choices.addEventListener("click", () => {
    console.log(choices)
    console.log("choice was clicked")
    const userChoice1 = document.getElementById("x").textContent;
    playgame(userChoice1);
})
choices2.addEventListener("click", () => {
    console.log(choices2)
    console.log("choice2 was clicked")
    const userChoice1 = document.getElementById("x2").textContent;
    playgame(userChoice1);

})
choices3.addEventListener("click", () => {
    console.log(choices3)
    console.log("choice3 was clicked")
    const userChoice1= document.getElementById("x3").textContent;
    playgame(userChoice1);
 
})
const draw=()=>
{
    console.log("game was draw ")
}



