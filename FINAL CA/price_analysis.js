if(localStorage){
    const p = document.querySelector("p");
    p.innerText = localStorage.getItem("email").trim();
}