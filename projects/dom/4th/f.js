let elem=document.querySelectorAll('.elem')

elem.forEach(function(val)
{
val.addEventListener('mouseenter',function()
{
val.childNodes[3].style.opacity=1
// Reset the width before starting
       

})
val.addEventListener('mouseleave',function()
{
    val.childNodes[3].style.opacity=0
})
val.addEventListener('mousemove',function(e)
{
    val.childNodes[3].style.left=e.x+'px'
   
    
   
    

})

})