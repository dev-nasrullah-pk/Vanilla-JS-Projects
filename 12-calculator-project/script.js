console.log("Lets Start JS");
let btns = document.querySelectorAll(".btn");
let inputStrings = "";
let screen = document.getElementById("calculator-screen");
function handInput(value) {
    let lastChar = inputStrings.slice(-1);
    if (value === 'C') {
        inputStrings = "";
        screen.value = "";
    } else if (value === 'DEL' || value === 'Backspace') {
        inputStrings = inputStrings.slice(0, -1);
        screen.value = inputStrings;
    } else if (value === '=' || value === 'Enter') {
        try {

            inputStrings = eval(inputStrings).toString();
            screen.value = inputStrings
        } catch (error) {
            screen.value = "Error";
            inputStrings = "";
        }
    } else if (['+', '-', '%', '/', '*'].includes(value)) {
        if (!['+', '-', '%', '/', '*'].includes(lastChar) && inputStrings !== "") {
            inputStrings += value;
            screen.value = inputStrings;
        }
    } else if (!isNaN(value) || value === '.') {
        inputStrings += value;
        screen.value = inputStrings;
    }
}
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handInput(e.target.innerText)
    })
})
document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape'){
        handInput('C')
    } else{
        handInput(e.key)
    }
})
console.log(inputStrings);
