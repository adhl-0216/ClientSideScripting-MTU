const form = document.forms[0];
let timer = null;
(function (min) {
    let minLeft = Number(min)-1;
    let secLeft = 60;
    timer = setInterval(function (){
        secLeft -=1;
        if (secLeft < 10) secLeft = "0"+secLeft;
        if (Number(secLeft) === 0){
            minLeft-=1;
            if (minLeft < 0) {
                alert("Webpage Timed Out!");
                window.location.reload();
            }
            secLeft = 60;
        }
        document.getElementById("timeout").innerText = minLeft.toString() + ":" + secLeft.toString();
    },1000);
})(4);


const runningTotal = document.getElementById("running-total");

const txtBoxes = document.querySelectorAll("input[pattern='[0-9]*']");
const radioButtons = document.querySelectorAll("input[type='radio']");
const selectBoxes = document.querySelectorAll("select");

let resetOutline = function (e) {
    e.target.style.outline = "none";
    e.target.removeEventListener("focusout", resetOutline);
}

let updateTotal = function () {
    let price = 0;

    for (const radioButton of radioButtons) {
        if (radioButton.checked === true){
            price += Number(radioButton.value);
        }
    }

    for (const txtBox of txtBoxes) {
        if (isNaN(Number(txtBox.value))) {
            txtBox.style.outline = "1px solid red";
            txtBox.addEventListener("focusout", resetOutline);
            txtBox.focus();
            return;
        }
        if (txtBox.id === "years-claim-free") price += Number(txtBox.value) * -10;
        else price += Number(txtBox.value) * 10;
    }

    for (const selectBox of selectBoxes) {
        if (selectBox.id === "contents-cover") {
            price += Number(selectBox.value*10);
            continue;
        }

        if (selectBox.id === "building-cover") {
            price += Number(selectBox.value*20);
            continue;
        }

        price += Number(selectBox.value);
    }

    runningTotal.value = '\u20AC ' + Number(price).toFixed(2);
}

form.addEventListener("focus", updateTotal);
form.addEventListener("change", updateTotal);

const txtEmail = document.querySelector("#email");

let submitForm = function (e){
    e.preventDefault();
    let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(!txtEmail.value.match(mailFormat))
    {
        txtEmail.style.outline = "1px solid red";
        txtEmail.addEventListener("focusout", resetOutline);
        txtEmail.focus();
        return;
    }
    form.submit();
    for (let i = 0; i < form.length; i++) {
        form[i].disabled = true;
    }
    clearInterval(timer);
};

form.addEventListener("submit", submitForm);