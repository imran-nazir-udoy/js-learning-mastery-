const promises = new Promise(function(resolve, reject) {
    // do any async task

    setTimeout(function() {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promises.then(function() {
    console.log("Promise consumed");
});
