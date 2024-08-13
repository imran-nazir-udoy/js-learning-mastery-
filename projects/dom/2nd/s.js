let con=document.querySelector('.card')
let i=document.querySelector('i')

function handle1 ()
{
    i.style.transform=" translate(-50%,-50%) scale(3)";
    set();

}
function handle2 ()
{
    // i.style.transform=" translate(-50%,-50%) scale(3)";
    resetset();
}
function set()
{
    
setTimeout(function()
{
    i.style.transform=" translate(-50%,-50%) scale(0)";
},2000)

}

function resetset()
{
    
setTimeout(function()
{
    i.style.transform=" translate(-50%,-50%) scale(0)";
},2000)

}

let c=0

  
    function toggleHandlers() {
        if (c % 2 != 0 || c==0 ) {
            handle1();
        } else {
            handle2();
        }
        c++;
    }



con.addEventListener('dblclick', toggleHandlers);