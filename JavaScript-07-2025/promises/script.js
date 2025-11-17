const promises  = new Promise(function(resolve,reject){
    // do   an async task
    // DB calls , cryptography, network

    setTimeout(()=>{
        console.log("Async task completed:");
        resolve();
        reject()
    },1000)
});

promises.then(function(){
    console.log("promies consume");
   
})


