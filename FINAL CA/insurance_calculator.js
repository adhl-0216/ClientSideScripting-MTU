
const allListBox = document.querySelectorAll("select");
for (let i = 0; i < allListBox.length; i++) {
    allListBox[i].selectedIndex = -1;
}

const allFields = document.querySelectorAll("select, input:not([id='running-total']):not([id='submit'])");
for (const field of allFields) {
    field.required = true;
}

document.querySelector("form").addEventListener("submit", function (e){
    e.preventDefault();
    for (const field of allFields) {
        if (field.id === "email"){
            const mailFormat = /(?:[a-z\d!#$%&'*+=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?|\[(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?|[a-z\d-]*[a-z\d]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;
            console.log(field.value);
            if (field.value.match(mailFormat)){
                console.log("valid email");
            }else {
                console.log("no match");
                field.focus();
            }
        }else if(field.className === "numeric") {
            if (isNaN(Number(field.value)) || field.value.indexOf('.') !== -1) {
                alert("Please enter whole numbers only!");
                field.focus();
                field.value = "";
            }
        }

        if (localStorage) {
            console.log(field.id, field.value);
            localStorage.setItem(field.id, field.value);
        }else {
            alert("Sorry, your browser does not support local storage unfortunately...")
        }
    }
    alert("submit!");
});



