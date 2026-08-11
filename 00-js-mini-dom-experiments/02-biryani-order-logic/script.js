let btn = document.querySelector(".btn-order")
let msg = document.querySelector(".order-stadus")

btn.addEventListener("click", function(){
    msg.innerText = "Cooking Your Biryani....Please Wait(4 Seconds)";
    let promise = new Promise(function(resolve, reject){
        let cheifavailable = false;
        setTimeout(function(){
            if(cheifavailable){
                resolve("Garma Garam Is biryani ready!");
            }else{
                reject("Sorry Chief is busy order cancelled")
            }
        }, 4000);
        
    })
    .then(function(msgg){
        document.body.style.backgroundColor = "yellow"
        msg.innerText = msgg
    })
    .catch(function(error){
        document.body.style.backgroundColor = "orange";
        msg.innerText = error
    })
})