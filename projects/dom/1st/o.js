let btn1=document.querySelector('.butt')
let btn2=document.querySelector('.but')
let h5=document.querySelector('h5')
let p=document.createElement('p')
let ca=document.querySelector('.card')
let c=0;
btn2.addEventListener('click',function(e)
{
    
    h5.innerHTML=`Friends`
     h5.style.fontSize='30px'
      h5.style.color='lightgreen'
      p.innerHTML='Hurrary accepted'
      ca.appendChild(p)
      ca.style.backgroundColor='green'
         p.style.color='lightgreen'
      
        if(c%2==0)
            {
                   btn2.style.backgroundColor='black'
           btn2.style.color='white'
              btn1.style.backgroundColor='rgb(212, 159, 62)'
       btn1.style.color='black'
        btn2.disabled = true;
           btn1.disabled = false;
           if(btn2.disabled = true)
               btn2.style.backgroundColor='gray'
            }
           
            c++;

})
btn1.addEventListener('click',function(e)
{
    h5.innerHTML=`Stranger`
    h5.style.fontSize='20px'
      h5.style.color='red'
      ca.style.backgroundColor='orange'
      p.innerHTML='Rejected'
         p.style.color='red'
      ca.appendChild(p)
      if(c%2==1 || c==0)
        {
               btn1.style.backgroundColor='black'
       btn1.style.color='white'
                   btn2.style.backgroundColor='rgb(162, 66, 226)'
           btn2.style.color='black'
           btn1.disabled = true;
           btn2.disabled = false;
           if(btn1.disabled = true){
            btn1.style.backgroundColor='gray';
         }
        

           
        }
        c++;
})
   
