document.addEventListener('DOMContentLoaded', (event) => {
    let input = document.getElementById('inputBox');
    let calculationDisplay = document.getElementById('calculationDisplay');
    let buttons = document.querySelectorAll('button');

    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                try {
                    string = eval(string);
                    input.value = string;
                    calculationDisplay.innerHTML = "";
                } catch {
                    input.value = "Error";
                    string = "";
                    calculationDisplay.innerHTML = "";
                }
            } else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
                calculationDisplay.innerHTML = "";
            } else if (e.target.innerHTML == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
                calculationDisplay.innerHTML = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
                calculationDisplay.innerHTML = string;
            }
        });
    });
});



