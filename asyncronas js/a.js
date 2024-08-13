//callbacks in asynchronas javascript
//function getdata(dataid, getnextdata) {
//    setTimeout(() => {
//        console.log("data", dataid);
//        if (getnextdata) {
//            getnextdata(); //callback
//            //it will call untill the call functions are not  ended
//        }

//    }, 5000);
//}
//......................................................
//nesting of callbacks
//if we do this to much than will be gotten into callback hell that is not good
//getdata((1), () => {
//    //first call

//    getdata(2, () => {//second call
//        getdata(3, () => {//third call
//            getdata(4, () => {//fourth call

//            })
//        })
//    })
//});

//............................................................######################
//to save us from call back hell we have promises
/*
syntax of promises
let promises = new promise ( (resolve , reject)=>
{
console.log("I am promises")
reject("some error occurd")
});
*/
//......................................

//function getdataf(dataids) {
//    return p = new Promise((resolve, reject) => {
//        setTimeout(() => {



//            console.log("data : ", dataids);
//            resolve("success");
//            //reject("error console is commented out")

//        }, 5000)
//    });
//}

//getdataf(2)

//..............................

//how to use promise
/*
promise.then((result..you can give it it depands on you) =>
{

})
->
promise.catch((error..you can give it it depands on you)=>
{

})
->
*/

//const getpromise = () => {
//    return p = new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log("I am promising");
//            resolve("successive") //passing arguements
//            //reject("failed network error") //passing arguements
//        }, 5000)

//    });
//}

//now for catching the success you can use the promise.then()...
//first call the get promise either promise will not get any value or data to evaluate
//let promise = getpromise()
//promise.then((res) => {
//    console.log("promise fullfilled", res);
//})

//promise.catch is used to catch the errors from rejected to the getpromise function
//promise.catch((err) => {
//    console.log("rejected ", err)
//})

//promise chaining .......... it is the main use case of promise
// it is the another way of doing callback nesting but in a easy way to prevent nesting callback hell

const get_data = ((dataid) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            if (dataid == 1) {
                resolve("success", dataid);
            }
            else if (dataid == 2) {
                resolve("success", dataid);
            }
            else
                reject("network issue")
        }, 5000);
    });
});

//let call = get_data(1); one way
//another way ...as get_data will return a promise so we can directly use it
//get_data(1).then((result) => {
//    console.log(result);
//    get_data(2).then(() => {
//        console.log(result)
//    }).catch((err) => {
//        console.log("error", err)
//    });
//}).catch((err) => {
//    console.log("error", err)
//});

//the most easier way _>
get_data(1).then((res) => {
    console.log("success", res)
    return get_data(2);
}).then((res) => {
    console.log("res : ", res)
    return get_data(3);
}).then(() => {
    console.log("res : ", res)
})

get_data(1).catch((err) => {
    console.log(err)
    return get_data(2)
}).catch((err) => {
    console.log(err)
    return get_data(2)
}).catch((err) => {
    console.log(err)

})