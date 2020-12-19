function tennivalóBeírás () {
    let újElem = document.createElement("div");
    újElem.innerHTML = document.querySelector("#tennivaló").value;
    újElem.onclick = elemTörlés;
    document.querySelector("#lista").appendChild(újElem);
    listaMentés();
}
function elemTörlés() {
    document.querySelector("#lista").removeChild(this);
    listaMentés();
}
function listaMentés() {
    localStorage.taroltLista = document.querySelector("#lista").innerHTML;
}
function listaBetöltés() {
    document.querySelector("#lista").innerHTML = localStorage.taroltLista;
    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].onclick = elemTörlés;
    }
}
if (localStorage.taroltLista) {
    listaBetöltés();
}