function játékIndítás() {
    játékCiklus();
}
let ciklusok = 0;
let láthatóSzemélyek = false;
let játékPontszám = 0;
function játékCiklus() {
    láthatóSzemélyek = !láthatóSzemélyek;
    szereplőLétrehozás();
    ciklusok++;
    if (ciklusok < 12) {
        setTimeout(játékCiklus, láthatóSzemélyek ? 1000 : 3000);
    }
    else {
        alert ("Összpontszám: " + játékPontszám);
    }
}
function szereplőLétrehozás() {
    let tábla = document.querySelector("#tábla");
    let osztálybeállító = láthatóSzemélyek ? "szereplő látható" : "szereplő rejtett";
    for (let index = 0; index < 6; index++) {
        tábla.children[index].className = osztálybeállító;
        tábla.children[index].onclick = function() {
            játékPontszám += -2;
        }
    }
    let véletlenSzám = Math.floor(Math.random() * 6) + 1;
    tábla.children[véletlenSzám-1].onclick = function() {
        játékPontszám++;
    }
    //A következő sorban az idézőjel után kell a szóköz! Mivel több osztály is hozzá van rendelve.
    tábla.children[véletlenSzám-1].className = osztálybeállító + " tolvaj";
}