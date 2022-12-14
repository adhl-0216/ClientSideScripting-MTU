const form = document.forms[0];
// setTimeout(function (){
//     window.alert("Webpage Timed Out.");
//     window.location.reload();
// }, 24000);
// form.reset();

const runningTotal = document.getElementById("running-total");

const txtEmail = document.querySelector("#email");
let valid = false;
let validateEmail = function () {
    const mailFormat = /(?:[a-z\d!#$%&'*+=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?|\[(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?|[a-z\d-]*[a-z\d]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;
    if (!txtEmail.value.match(mailFormat)) {
        alert("Invalid Email Entered!");
        txtEmail.focus();
        return false;
    }
    return true;
};
txtEmail.addEventListener("change", validateEmail);

const txtBoxes = document.querySelectorAll("input[pattern]");
const radioButtons = document.querySelectorAll("input[type='radio']");
const selectBoxes = document.querySelectorAll("select");

console.log(selectBoxes);

let updateTotal = function () {
    let init = 0;

    for (const radioButton of radioButtons) {
        if (radioButton.checked === true){
            init += Number(radioButton.value);
        }
    }

    for (const txtBox of txtBoxes) {
        let price;
        if (txtBox.id === "years-claim-free") price = Number(txtBox.value)*-10;
        else price = Number(txtBox.value)*10;
        init += price;
    }

    for (const selectBox of selectBoxes) {
        if (selectBox.id === "contents-cover") {
            init += Number(selectBox.value*10);
            continue;
        }

        if (selectBox.id === "building-cover") {
            init += Number(selectBox.value*20);
            continue;
        }

        init += Number(selectBox.value);
    }

    runningTotal.value = '\u20AC ' + Number(init).toFixed(2);
}

form.addEventListener("focusout", updateTotal);
form.addEventListener("change", updateTotal);

let calculate = function (e){
    e.preventDefault()
    if(validateEmail()) valid = true;
    if (valid){
        form.submit();
    }
};

document.querySelector("#calculate").addEventListener("submit", calculate);




