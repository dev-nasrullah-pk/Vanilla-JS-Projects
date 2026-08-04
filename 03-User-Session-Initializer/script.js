// (function (){
//     let savedTheme = localStorage.getItem("userTheme");
//     let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     if (savedTheme === "dark"||(!savedTheme && prefersDark)){
//         document.body.classList.add("dark-mode");
//     } else{
//         document.body.classList.add("Light-mode")
//     }
//     console.log("Theme initialized clenly!");

// })()


let userName = document.getElementById("input-box");
let save_btn = document.querySelector(".save-btn");
let reset_btn = document.querySelector(".reset-btn");
let text = document.querySelector(".heading");
(function () {
    let savedUser = localStorage.getItem("userName");
    console.log(localStorage);
    if (savedUser) {
        text.innerText = "Welcome Back," + savedUser + "! 🚀"
        userName.style.display = "none";
        save_btn.style.display = "none";
        reset_btn.style.display = "inline-block";
    }else {
        userName.style.display = "inline-block";
        save_btn.style.display = "inline-block";
        reset_btn.style.display = "none";
    }
})();

save_btn.addEventListener("click", () => {
    let name = userName.value;
    if (name !== "") {
        localStorage.setItem("userName", name);
        location.reload();
    }
})
userName.addEventListener("keypress", (e)=>{
    let name = userName.value;
    if (e.key === "Enter"){
        localStorage.setItem("userName", name);
        location.reload();
    }
})

reset_btn.addEventListener("click", () =>{
    localStorage.removeItem("userName");
    location.reload();
})