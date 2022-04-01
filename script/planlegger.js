//liste med tre navn og 4 dager og kjøre

let brukere = ["Abdullah", "Mohammed", "Odai"];

let ganger = [1, 3, 4];

//legge admin funksjonalitet hvor vi kan endre rollen på brukeren

//system må oppdatere hvem skal kjøre dagen etter start på siste time
//du kan legge ny plan for hver semester

//vi trenger og kunne vite hvem dag det er, og fra det kunne velge en person som kjører

let dager = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

let dagerSmall = ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"];

let maander = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

const d = new Date();

let dag = dager[d.getDay()];
let dagNr = d.getDate();
let mnd = d.getMonth();
let aar = d.getFullYear();

document.getElementById("demo").innerHTML = "Dato: " + dag + " " + dagNr + ". " + maander[mnd] + " " + aar;


let kjort = [];

let counter = 0;

//if counter = 4 legg en tilfeldig person fra brukere;


//hente elmenter hvor vi kan skrive ut data


let driver = document.getElementById("driver");

driver.innerHTML = "Hvem kjører: " + brukere[1] + " kjører idag";

for (let i = 0; i < brukere.length; i++) {
    let ol = document.getElementById("personer");

    let li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");

    let div1 = document.createElement("div");
    div1.classList.add("ms-2", "me-auto");

    let div2 = document.createElement("div");
    div2.classList.add("fw-bold");
    div2.innerHTML = brukere[i];

    let span1 = document.createElement("span");
    span1.classList.add("badge", "bg-primary", "rounded-pill", "me-1");
    span1.innerHTML = dagerSmall[1];

    let span2 = document.createElement("span");
    span2.classList.add("badge", "bg-danger", "rounded-pill", "me-1");
    span2.innerHTML = dagerSmall[2];

    let span3 = document.createElement("span");
    span3.classList.add("badge", "bg-warning", "rounded-pill", "me-1");
    span3.innerHTML = dagerSmall[3];

    let span4 = document.createElement("span");
    span4.classList.add("badge", "bg-primary", "rounded-pill", "me-1");
    span4.innerHTML = dagerSmall[4];

    let span5 = document.createElement("span");
    span5.classList.add("badge", "bg-primary", "rounded-pill", "me-1");
    span5.innerHTML = dagerSmall[5];

    let span6 = document.createElement("span");
    span6.classList.add("badge", "bg-primary", "rounded-pill", "me-1");
    span6.innerHTML = dagerSmall[6];

    let span7 = document.createElement("span");
    span7.classList.add("badge", "bg-primary", "rounded-pill");
    span7.innerHTML = dagerSmall[0];


    ol.appendChild(li);
    li.append(div1, span1, span2, span3, span4, span5, span6, span7);
    div1.appendChild(div2);

    

}


