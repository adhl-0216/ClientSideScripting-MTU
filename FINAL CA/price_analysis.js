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
(obj["ownership"] === "50")? obj["ownership"] = "Tenant": obj["ownership"] = "Owner";
(obj["area"] === "50")? obj["area"] = "Outside Dublin": obj["area"] = "Dublin";

switch (obj["property type"]) {
    case "75" :{
        obj["property type"] = "Bungalow";
        break;
    }
    case "100" :{
        obj["property type"] = "Country House";
        break;
    }
    case "50" :{
        obj["property type"] = "Detached";
        break;
    }
    case "40" :{
        obj["property type"] = "Semi Detached";
        break;
    }
    case "30" :{
        obj["property type"] = "Terraced";
        break;
    }
    case "20" :{
        obj["property type"] = "Flat";
        break;
    }
}

switch(obj["cover type"]){
    case "50":{
        obj["cover type"] = "Owner Occupied";
        break;
    }
    case "60":{
        obj["cover type"] = "Holiday";
        break;
    }
    case "70":{
        obj["cover type"] = "Rental";
        break;
    }
}

switch (obj["contents cover"]){
    case "1":{
        obj["contents cover"] = "\u20ac 0 - \u20ac 5,000";
        break;
    }
    case "2": {
        obj["contents cover"] = "\u20ac 5,001 - \u20ac 10,000";
        break;
    }
    case "3": {
        obj["contents cover"] = "\u20ac 10,001 - \u20ac 15,000";
        break;
    }
    case "4": {
        obj["contents cover"] = "\u20ac 15,001 - \u20ac 20,000";
        break;
    }
    case "5": {
        obj["contents cover"] = "\u20ac 20,001 - \u20ac 25,000";
        break;
    }
}
switch (obj["building cover"]){
    case "1":{
        obj["building cover"] = "\u20ac 0 - \u20ac 100,000";
        break;
    }
    case "2": {
        obj["building cover"] = "\u20ac 100,001 - \u20ac 200,000";
        break;
    }
    case "3": {
        obj["building cover"] = "\u20ac 200,001 - \u20ac 300,000";
        break;
    }
    case "4": {
        obj["building cover"] = "\u20ac 300,001 - \u20ac 400,000";
        break;
    }
    case "5": {
        obj["building cover"] = "\u20ac 400,001 - \u20ac 500,000";
        break;
    }
}

let keys = Object.keys(obj);
let i = 0;
for (const key of keys) {

    let p = document.createElement("p");

    if(i < keys.length-1){
        p.className = "field half";
    }else {
        p.className = "field";
    }

    let cell1 = document.createElement("label");
    cell1.className = "label";
    let cell2 = document.createElement("input");
    cell2.type = "text";
    cell2.readOnly = true;
    cell2.className = "text-input";

    cell1.innerHTML = key.toUpperCase();
    cell2.value = obj[key];
    p.replaceChildren(cell1, cell2);

    form.appendChild(p);
    i++;
}
