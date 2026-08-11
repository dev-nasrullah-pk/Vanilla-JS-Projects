let btn_1 = document.querySelector(".btn-quote")
let text = document.querySelector(".quote")
function FetchData(src, callback) {
    setTimeout(function () {
        let script = document.createElement('script')
        script.src = src
        script.onload = function () {
            callback();
        }
        document.head.append(script)
    }, 2000)
}
btn_1.addEventListener("click", function () {
    text.innerText = "Loading Quote..."
    let link = "https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js";
    FetchData(link, function () {
        text.innerText = "✨ Work hard in silence, let your success be your noise!"
    })
})

let btn_2 = document.querySelector(".btn-theme");
let theme_msg = document.querySelector(".theme-msg")
function processtheme(callback) {
    let countdown = 3;
    let timer = setInterval(function () {
        if (countdown > 0) {
            theme_msg.innerText = `Changing theme in ${countdown} seconds....`
            countdown--;
        } else {
            clearInterval(timer)
            script = callback();
        }
    }, 1000)
}
btn_2.addEventListener("click", function () {
    theme_msg.innerText = "Changing theme in 3 seconds..."
    processtheme(function () {
        theme_msg.innerText = "Theme changed successfully!"
        document.body.style.backgroundColor = "#0d1b2a"
        document.body.style.color = "white"
    })
})

let btn_3 = document.querySelector(".btn-order");
let status_msg = document.querySelector(".status-msg");

function processoroder(callback) {
    let count = 3;
    setInterval(function () {
        if (count > 0) {
            status_msg.innerText = `Verifying Payment Deatail In ${count}s...`
            count--;
        } else {
            clearInterval();
            callback();
        }
    }, 1000)

}
btn_3.addEventListener("click", function () {
    status_msg.innerText = "Please wait 3s..."
    processoroder(function () {
        status_msg.innerText = "🎉 Success! Your smartphone order has been secured."
        document.body.style.backgroundColor = "#d4edda"
        document.body.style.color = "black"
    })
});


let btn_gym = document.querySelector(".btn-gym")
let gym_status = document.querySelector(".gym-status")
function gym(time, callback) {
    let count = time;
    let timerid = setInterval(function () {
        if (count > 0) {
            gym_status.innerText = `Left Heavy! ${count}s remaining...`
            count--;
        } else {
            clearInterval(timerid);
            callback();
        };
    }, 1000)
}
btn_gym.addEventListener("click", function () {
    gym_status.innerText = "Waiting!"
    gym(5, function () {
        gym_status.innerText = "💪 Set Complete! Take a 1-minute rest."
        document.body.style.backgroundColor = "orange"
    })

})