let btn = document.querySelector(".btn")
let status = document.querySelector(".status")
function LoadScript(src, callback) {
    let script = document.createElement('script')
    script.src = src;
    script.onload = function(){
        callback();
    }
    document.head.append(script)
}

btn.addEventListener("click", function(){
    status.innerText = "Downloading effect from internet... Plaese wait...";
    let internetlink = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"
    LoadScript(internetlink, function(){
        status.innerText = "Successs! Script Loaded and exected."
        confetti({
            particleCount: 200,
            spread: 100
        })
    })
})

let btn_1 = document.querySelector(".btn-1")
let info = document.querySelector(".info")

function DownloadTool(src, Chalaio) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        Chalaio();
    }
    document.head.append(script)
}
btn_1.addEventListener("click", function () {
    info.innText = "Fetching fireworks from server..."
    let link = "https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"
    info.innerText = "Fireworks Activated!"
    DownloadTool(link, function () {
        info.innerText = "Successs! Script Loaded and exected."
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['⚡', '💥', '✨', '🎆'],
        })
    })
})