let save_btn = document.querySelector(".save-btn");
let clear_btn = document.querySelector(".clear-btn");
let badgeStadus = document.getElementById("status-badge")

let input_title = document.getElementById("note-title");
let input_content = document.getElementById("note-content");

(function () {
    let savedTitle = localStorage.getItem("noteTitle");
    let savedContent = localStorage.getItem("noteContent");
    if (savedTitle || savedContent) {
        input_title.value = savedTitle;
        input_content.value = savedContent;
        badgeStadus.innerText = "Saved Session💾";
        console.log(localStorage);

    }
})();
save_btn.addEventListener("click", () => {
    if (input_title.value !== "" || input_content.value !== "") {
        localStorage.setItem("noteTitle", input_title.value);
        localStorage.setItem("noteContent", input_content.value);
        badgeStadus.innerText = "Note Saved ✨"
    }

})
clear_btn.addEventListener("click", () => {
    localStorage.clear("noteTitle");
    localStorage.clear("noteContent");
    input_title.value = "";
    input_content.value = "";
    badgeStadus.innerText = "Cleaned! 🧹"
})