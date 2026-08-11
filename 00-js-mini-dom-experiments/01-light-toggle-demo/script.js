let isLightOn = false;
const Switch = document.querySelector(".toggle-btn");
const msg = document.querySelector(".msg");

Switch.addEventListener("click", function() {
    if (isLightOn === false) {
        document.body.style.backgroundColor = "yellow";
        msg.innerHTML = "The Light Is ON";
        isLightOn = true;
    }
    else {
        document.body.style.backgroundColor = "white";
        msg.innerHTML = "The Light is OFF";
        isLightOn = false;
    }
});