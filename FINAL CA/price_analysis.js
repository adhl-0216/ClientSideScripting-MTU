const p = document.querySelector("#p1");
let formData = location.search;
formData = formData.substring(1, formData.length);
formData = decodeURI(formData);
let formArr = formData.split("&");
for (let string of formArr) {
    string = string.replaceAll("-", " ").replaceAll("%40","@").replaceAll("="," : ");
    p.innerText += string + "\n";
}