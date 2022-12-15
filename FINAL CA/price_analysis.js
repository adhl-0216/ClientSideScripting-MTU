const form = document.querySelector(".form");
let data = location.search;
data = data.substring(1, data.length);
data = decodeURI(data);
let arr = data.split("&");
let obj = {};
for (let string of arr) {
    string = string.replaceAll("-", " ").replaceAll("%40", "@").replaceAll("+"," ");
    let strArr = string.split("=");
    obj[strArr[0].toString()] = strArr[1];
}
if (obj["ownership"] === "50") {
    obj["ownership"] = "Tenant (\u20ac " + obj["ownership"] + ")";
} else {
    obj["ownership"] = "Owner (\u20ac " + obj["ownership"] + ")";
}

if (obj["area"] === "50") {
    obj["area"] = "Outside Dublin (\u20ac " + obj["area"] + ")";
} else {
    obj["area"] = "Dublin (\u20ac " + obj["area"] + ")";
}

switch (obj["property type"]) {
    case "75" :{
        obj["property type"] = "Bungalow (\u20ac " + obj["property type"]+ ")";
        break;
    }
    case "100" :{
        obj["property type"] = "Country House (\u20ac " + obj["property type"]+ ")";
        break;
    }
    case "50" :{
        obj["property type"] = "Detached (\u20ac " + obj["property type"]+ ")";
        break;
    }
    case "40" :{
        obj["property type"] = "Semi Detached (\u20ac " + obj["property type"]+ ")";
        break;
    }
    case "30" :{
        obj["property type"] = "Terraced (\u20ac " + obj["property type"]+ ")";
        break;
    }
    case "20" :{
        obj["property type"] = "Flat (\u20ac " + obj["property type"]+ ")";
        break;
    }
}

switch(obj["cover type"]){
    case "50":{
        obj["cover type"] = "Owner Occupied (\u20ac " + obj["cover type"] + ")";
        break;
    }
    case "60":{
        obj["cover type"] = "Holiday (\u20ac " + obj["cover type"] + ")";
        break;
    }
    case "70":{
        obj["cover type"] = "Rental (\u20ac " + obj["cover type"] + ")";
        break;
    }
}

switch (obj["contents cover"]){
    case "1":{
        obj["contents cover"] = "\u20ac 0 - \u20ac 5,000 (\u20ac " + obj["contents cover"]*10 + ")";
        break;
    }
    case "2": {
        obj["contents cover"] = "\u20ac 5,001 - \u20ac 10,000 (\u20ac " + obj["contents cover"]*10 + ")";
        break;
    }
    case "3": {
        obj["contents cover"] = "\u20ac 10,001 - \u20ac 15,000 (\u20ac " + obj["contents cover"]*10 + ")";
        break;
    }
    case "4": {
        obj["contents cover"] = "\u20ac 15,001 - \u20ac 20,000 (\u20ac " + obj["contents cover"]*10 + ")";
        break;
    }
    case "5": {
        obj["contents cover"] = "\u20ac 20,001 - \u20ac 25,000 (\u20ac " + obj["contents cover"]*10 + ")";
        break;
    }
}
switch (obj["building cover"]){
    case "1":{
        obj["building cover"] = "\u20ac 0 - \u20ac 100,000 (\u20ac " + obj["building cover"]*20 + ")";
        break;
    }
    case "2": {
        obj["building cover"] = "\u20ac 100,001 - \u20ac 200,000 (\u20ac " + obj["building cover"]*20 + ")";
        break;
    }
    case "3": {
        obj["building cover"] = "\u20ac 200,001 - \u20ac 300,000 (\u20ac " + obj["building cover"]*20 + ")";
        break;
    }
    case "4": {
        obj["building cover"] = "\u20ac 300,001 - \u20ac 400,000 (\u20ac " + obj["building cover"]*20 + ")";
        break;
    }
    case "5": {
        obj["building cover"] = "\u20ac 400,001 - \u20ac 500,000 (\u20ac " + obj["building cover"]*20 + ")";
        break;
    }
}


let keys = Object.keys(obj);
let i = 0;
for (const key of keys) {

    let p = document.createElement("p");

    if (i < keys.length-1){
        p.className = "field half";
    }else {
        p.className = "field";
    }


    let label = document.createElement("label");
    label.className = "label";
    let textBox = document.createElement("input");
    textBox.type = "text";
    textBox.readOnly = true;
    textBox.className = "text-input"

    let priceDetail;
    if (key === "no of bedrooms" || key === "years built") {
        priceDetail = obj[key] + " (\u20ac " + obj[key]*10 + ")";
    }else if (key === "years claim free"){
        priceDetail = obj[key] + " (\u20ac " + obj[key]*10 + " off)";
    }
    else priceDetail = obj[key];
    label.innerHTML = key.toUpperCase();
    textBox.value = priceDetail;
    p.replaceChildren(label, textBox);

    form.appendChild(p);
    form.appendChild(document.createElement("br"));
    i++;
}
