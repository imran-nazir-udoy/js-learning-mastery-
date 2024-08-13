const url='https://cat-fact.herokuapp.com/facts';
let data;


const getfacts=async()=>
    {
        let promise = await fetch(url)//fetch returns promise
        console.log(promise);

         data = await promise.json();
        console.log(data)
    }

getfacts();

