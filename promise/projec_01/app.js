// const url=`https://api.currencyapi.com/v3/latest?apikey=fca_live_j0tFYNRKj7VnWnTNTMZT3Aex3AmSImXCtGuoe01D`

let dropdown=document.querySelectorAll(' .selection select');
let fromcurr=document.querySelector('.from select')
let tocurr=document.querySelector('.to select')
const msg = document.querySelector(".final");
let btn=document.querySelector('form button')
let tbody=document.querySelector('tbody')
for(let select of dropdown)
    {
        for(code in countries)
            {
               let newoption=document.createElement("option");
            
          
               newoption.innerText=code
               newoption.value=code
               if(select.name==="from" && code==="USD" )
                {
                    newoption.selected="selected"
                }
                else if(select.name==="to" && code==="BDT" )
                    {
                        newoption.selected="selected"
                    }
               select.append(newoption)
             select.addEventListener("change",function(e)
            {
                updateflag(e.target);
            })
            }
    }


    function updateflag(e)
    {
        let code=e.value;
        let country=countries[code];
        let newflag=`https://flagsapi.com/${country}/flat/64.png`;
        let img=e.parentElement.querySelector("img");
        img.src=newflag
        
    } 
btn.addEventListener("click",  async (e)=>
{
e.preventDefault();
let amount=document.querySelector(".amount input")
let values = amount.value
if(values==="" || values<1)
    {
        values=1;
        amount.value='1'
    }

   




//finding the value of the second currency or to currency

// let furl=;
// const jsonData=furl;
// let f=`${fromcurr}`;

// 
//
let r;
let furl=`${url}&base_currency=${fromcurr.value}`;
let response=await fetch (furl);
let datas=await response.json() 
for(let key of Object.keys(datas["data"]))
    
    {
    k=(datas["data"][key]["code"]);
    // console.log(k)
    // console.log(fromcurr.value)
    // 
       if(k===fromcurr.value )
        {
           
            r=((datas["data"][key]["value"]))
            
            break;
        }
    //  else if(k===fromcurr.value &&  fromcurr==="USD")
    //         {
               
    //             r=((datas["data"][key]["value"]))
    //             break;
    //         }
    }
   
let fr=r*values;
console.log(r);
    let r1;
let datas1=p;
for(let key of Object.keys(datas["data"]))
    {
    k=(datas["data"][key]["code"]);
    // console.log(k)
    // console.log(fromcurr.value)
    // 
       if(k===tocurr.value)
        {
           
            r1=((datas["data"][key]["value"]))
            break;
        }
    }
let final_amount=r1*fr;
msg.innerText=final_amount;
    let str= "";
        for (let i of Object.keys(datas["data"])) {
            
            str+=
            `
            <tr>
        <td${i}</td>
        <td>${datas["data"][i]["code"]}</td>
        <td>${datas["data"][i]["value"]}</td>
      </tr>
   
            
            `
        }
        tbody.innerHTML=str;

}); 



