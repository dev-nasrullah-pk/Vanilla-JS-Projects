let container = document.getElementById("terminal")

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function getrandomelay() {
    return (Math.floor(Math.random() * 7) + 1) * 1000;
}
let hackingMessages = [
    "Initializing Hacking",
    "Establishing secure connection to proxy server",
    "Bypassing firewall protocols",
    "Accessing local database root",
    "Reading your Files",
    "Extracting system configuration",
    "Password files Detected",
    "Decrypting security hashes",
    "Sending all passwords and personal files to server",
    "Erasing footprints from system logs",
    "Cleaning up",
    "System Hacked Successfully! ☠️"
];
async function starthacking() {
    for (let message of hackingMessages) {
        let p = document.createElement("p");
        container.appendChild(p);
        
        let count = 0;
        let IntervalId = setInterval(() => {
            count ++;
            if(count > 3){
                count = 1;
            }
         p.innerHTML= `<span class="prompt">root@system:~$</span> ${message}${".".repeat(count)}`;
            // p.innerText = "root@system:~$ " + message + ".".repeat(count);
            // p.innerText = "root@system:~$ " + message + ".".repeat(count);
            // p.innerText = "root@system:~$ " + message + ".".repeat(count);
        }, 400)
        // text.innerText = message;
        await delay(getrandomelay())
        clearInterval(IntervalId);
    }
}

starthacking();