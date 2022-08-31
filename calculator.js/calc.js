let bottomScreen = document.getElementById('screen-two');
let topScreen = document.getElementById('screen-one');
let numbers = document.getElementsByClassName("buttons");
let functionalities = document.getElementsByClassName('switch');
let functionBox = document.getElementById('function');
let screenValue = bottomScreen.value;
let functionValueSpace = functionBox.value;
let value1 = Number(topScreen.value)
let value2 = Number(bottomScreen.value)

let clear = document.getElementById('clear')
let equals = document.getElementById('equals')

for (let index = 0; index < numbers.length; index++) {
    let eachButton = numbers[index];
    eachButton.onclick = function inputVal() {

        bottomScreen.value += eachButton.value
        inp(bottomScreen.value)
    }

}

function inp() {
    for (let i = 0; i < functionalities.length; i++) {
        let functionality = functionalities[i];
        functionality.onclick = function carryOutArithmethic() {
            if (bottomScreen.value === ' ') {
                functionBox.innerHTML != functionality.value
            } else if (topScreen.value !== "" || bottomScreen.value !== ' ') {
                functionBox.innerHTML = functionality.value
                topScreen.value = bottomScreen.value;
                bottomScreen.value = ' ';

                let value1 = Number(topScreen.value)
                let value2 = Number(bottomScreen.value)

                let bottomText = bottomScreen.value;
                let tsv = topScreen.value
                console.log(typeof value1, value1, typeof value2, value2, functionBox.innerHTML);


                equals.onclick = function perfomArithmeticOperation() {
                    let value1 = Number(topScreen.value)
                    let value2 = Number(bottomScreen.value)

                    if (bottomScreen.value !== ' ' || topScreen.value !== ' ') {
                        let chosenArithmeticOperation = functionBox.innerHTML;
                        let equalVal = 0
                        chosenArithmeticOperation
                        switch (chosenArithmeticOperation) {
                            case '*':
                                equalVal = value1 * value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                break;

                            case '/':
                                equalVal = value1 / value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                break;
                            case '-':
                                equalVal = value1 - value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                break;
                            case '+':
                                equalVal = value1 + value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                // expected output: "Mangoes and papayas are $2.79 a pound."
                                break;
                            default:
                                console.log(`eqquals to was clicked`);
                        }
                    } else if (topScreen.value !== ' ' && functionBox.innerHTML !== '') {
                        let chosenArithmeticOperation = functionBox.innerHTML;
                        let equalVal = 0
                        chosenArithmeticOperation
                        switch (chosenArithmeticOperation) {
                            case '*':
                                equalVal = value1 * value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                break;

                            case '/':
                                equalVal = value1 / value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                break;
                            case '-':
                                equalVal = value1 - value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                break;
                            case '+':
                                equalVal = value1 + value2;
                                topScreen.value = equalVal;
                                bottomScreen.value = " ";
                                // expected output: "Mangoes and papayas are $2.79 a pound."
                                break;
                            default:
                                console.log(`eqquals to was clicked`);
                        }
                    }

                }

            }


        }
    }
}










clear.onclick = function clear() {
    if (topScreen.value !== ' ') {
        topScreen.value = " ";
        functionBox.value = ' ';
        bottomScreen.value = " ";
    } else {
        bottomScreen.value = " ";
    }

}