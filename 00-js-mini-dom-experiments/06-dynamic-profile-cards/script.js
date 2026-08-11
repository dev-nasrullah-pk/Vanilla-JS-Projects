const users = [
    { name: "Nasrullah", age: 19, skills: "Full Stack Development", color: "#ffffff", bg: "#1e293b" },
    { name: "Ali", age: 16, skills: "JavaScript Master", color: "#ffffff", bg: "#2563eb" },
    { name: "Ahmed", age: 18, skills: "Web Development", color: "#ffffff", bg: "#16a34a" },
    { name: "Basit", age: 15, skills: "CSS Design", color: "#ffffff", bg: "#9333ea" }
];
function  createProfile(user){
let profile = document.createElement("div");
profile.className = "profile-card";
profile.innerHTML =  `
<div class="details">
            <h3 class="user-name">${user.name}</h3>
            <p class="age"><strong>Age:</strong> ${user.age}</p>
            <p class="skills"><strong>Skill:</strong> ${user.skills}</p>
        </div>
`
profile.style.color = user.color;
profile.style.backgroundColor = user.bg;
document.getElementById("profile-container").append(profile);
}
users.forEach(createProfile);