const allListBox = document.querySelectorAll("select");
for (let i = 0; i < allListBox.length; i++) {
    allListBox[i].selectedIndex = -1;
}

/**
 * button onclick event handler
 * */
let calculate = function (e){
    /**
     * input validation
     */
    let output = "";

    const allText = document.querySelectorAll("input[type='text']:not([id='running-total'])");
    for (const text of allText) {
        if (text.value === ""){
            alert("All Fields Must Be Entered!");
            text.focus();
            break;
        }else {
            output += text.id + ": " + text.value + "\n";
        }
    }

    const allNumerics = document.querySelectorAll(".numeric");
    for (const numeric of allNumerics) {
        if (isNaN(Number(numeric.value)) || numeric.value.indexOf('.') !== -1) {
            alert("Please enter whole numbers only!");
            numeric.value = "";
        }else {
            //output += numeric.value + "\n";
        }
    }

    alert(output);
}
document.querySelector("button").addEventListener("click", calculate);

// const allAsterisk = document.querySelectorAll(".tip");
// let showTooltip = function (e){
//     console.log(e.target.firstElementChild);
//     e.target.firstElementChild.style.visibility = "visible";
// }
// for (const ast of allAsterisk) {
//     ast.addEventListener("mouseover", showTooltip);
// }

