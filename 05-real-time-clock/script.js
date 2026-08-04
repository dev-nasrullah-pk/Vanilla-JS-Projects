let btn = document.querySelector(".btn");
let dataText = document.querySelector(".data-text");
let timerInterval = null;
let isScriptLoaded = false;
async function ShowTimeDate(callback, src) {
    if (timerInterval) {
        clearInterval(timerInterval)
    }
    dataText.innerText = "Fetching current time...";
    if (!isScriptLoaded) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = function () {
            isScriptLoaded = true;
            callback();
        }
        document.head.append(script);
    } else {
        callback();
    }

    let dateObj;
    try {
        let url = 'https://time.now/developer/api/timezone/Asia/Karachi';
        let response = await fetch(url);
        if (!response.ok) throw new Error("API network error");
        let timeData = await response.json();
        dateObj = new Date(timeData.datetime);
    } catch (error) {
        console.warn("API failed, switeching to system time fallback:", error);
        new Date();
    }

    timerInterval = setInterval(function () {
        dateObj.setSeconds(dateObj.getSeconds() + 1);
        let LiveTime = dateObj.toLocaleString('en-PK', { hour12: true });
        dataText.innerHTML = `
        <h2> Pakistan Current Time</h2>
        <div class="time-display">${LiveTime}</div>
        `;
    }, 1000);
};

btn.addEventListener("click", function () {
    let link = "https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js";
    ShowTimeDate(function () {
        if (window.JSConfetti) {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti();
        }
    }, link);

});