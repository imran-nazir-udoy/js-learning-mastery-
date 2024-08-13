let con=document.querySelector('.main')
let cr=document.querySelector('.co')

con.addEventListener('mousemove',function(e)
{
    console.log("hey")
    
 cr.style.left = e.x + 'px';
 cr.style.top = e.y + 'px';
})