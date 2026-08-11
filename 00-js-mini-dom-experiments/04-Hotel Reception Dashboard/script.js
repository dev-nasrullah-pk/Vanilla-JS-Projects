const faqBtn = document.querySelector(".faq-btn");
const faqAns = document.getElementById("faq-ans");
faqBtn.onclick = () => faqAns.classList.toggle("hidden");

const bellbtn = document.getElementById("bell-btn");
const notifBox = document.getElementById("notif-box");

bellbtn.onclick = () => notifBox.classList.toggle("hidden");

const msgbtn = document.getElementById("msg-btn");
const hotelAlert = document.getElementById("hotel-alert");

const alerts = [
    { text: "Room 101 requested extra towels.", bg: "#fef08a", color: "#854d0e" },
    { text: "New booking confirmed from Lahore!", bg: "#bbf7d0", color: "#166534" },
    { text: "Chef says: Breakfast buffet is ready!", bg: "#bfdbfe", color: "#1e40af" },
    { text: "VIP Guest arriving  in 10 minutes!", bg: "#fecaca", color: "#991b1b" }
];
msgbtn.onclick = () => {
    const randomIndex = Math.floor(Math.random() * alerts.length);
    const currentAlert = alerts[randomIndex];

    hotelAlert.innerText = currentAlert.text;
    hotelAlert.style.backgroundColor = currentAlert.bg;
    hotelAlert.style.color = currentAlert.color;
}