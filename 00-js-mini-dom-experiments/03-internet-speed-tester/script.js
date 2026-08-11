let btn = document.querySelector(".btn");
let status = document.querySelector(".status")

btn.addEventListener("click", function(){
    status.innerText = "Testing Internet Speed Plz Wait....."
    document.body.style.backgroundColor = "white";
    let promise = new Promise(function(resolve, reject){
        let speedGood = Math.random()> 0.5;
        setTimeout(function(){
            if (speedGood){
                resolve ("Super Fast Internet 100Mbps")
            }else{
                reject ("Slow Connection Try Again")
                
            }
        }, 3000);
    })
    promise
    .then(function(msg){
        document.body.style.backgroundColor = "lightgreen"
        status.innerText = msg;    
    })
    .catch(function(error){
        document.body.style.backgroundColor = "salmon";
        status.innerText = error;
    })
})