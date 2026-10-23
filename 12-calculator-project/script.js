console.log("Lets Start JS");
let btns = document.querySelectorAll(".btn");
let inputStrings = "";
let screen = document.getElementById("calculator-screen");
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerText;
        if (value === 'C') {
            inputStrings = "";
            screen.value = "";
        } else if (value === 'DEL') {
            inputStrings = inputStrings.slice(0, -1);
            screen.value = inputStrings;
        } else if (value === '=') {
            inputStrings = eval(inputStrings).toString();
            screen.value = inputStrings
        } else if (value === '+'|| value === '-'|| value === '*'|| value === '/') {
            let lastChar = inputStrings.slice(-1);
            if (lastChar !== '+' && lastChar !== '-' && lastChar !== '/' && lastChar !== '*' && lastChar !== '%'){
                inputStrings += value;
                screen.value = inputStrings;
            }
        } else {
            inputStrings += value;
            screen.value = inputStrings;
        }
    });
});
console.log(inputStrings);
