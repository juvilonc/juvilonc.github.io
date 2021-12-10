/* Memória Játék */

// Oldalletöltésre eltűnik a beviteli div (a beviteli mezővel és gombbal)
function kezd() {
    document.getElementById("beviteliDiv").style.display = "none";
}

// "Mutat!"" gombra katt. kiírja a bekért db számú és hosszúságú random szavakat
var index;
var eredmeny = [];  // tárolja a létrejött szavakat
document.getElementById("mutat").onclick = function () {
    var szoszam = parseInt(document.getElementById("szoszam").value);  // input mező értéke
    var hossz = parseInt(document.getElementById("hossz").value);    // input mező értéke
    // console.log(szoszam, hossz);
    var randChar = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwyz";    // tárolja a betűket

    // egymásba ágyazott ciklusban jönnek létre a random szavak, és bekerülnek az eredmeny tömbbe
    for (index = 0; index < szoszam; index++) {
        var szo = "";
        for (let j = 0; j < hossz; j++) {
            szo += randChar.charAt(Math.floor(Math.random() * randChar.length));
        }
        eredmeny.push(szo);
    }
    // console.log(eredmeny);
    var listaz = document.getElementById("listaz");    // <ul> tag ID-ja
    // kiírja a szavakat a rendezetlen lista elemeiként
    for (index = 0; index < eredmeny.length; index++) {
        listaz.innerHTML += "<li>" + eredmeny[index] + "</li>";
    }
}

// "Játék" gombra katt. eltűnik a lista és megjelenik a beviteli div (a beviteli mezővel és gombbal)
document.getElementById("jatek").onclick = function () {
    document.getElementById("listaz").style.display = "none";
    document.getElementById("beviteliDiv").style.display = "";
}

// "Bevitel" gombra katt. kiértékeli a bevitt szavakat és jelzi, hány szót kell még eltalálni
var tarolo = [];  // itt gyűlnek a beírt szavak
document.getElementById("bevitel").onclick = function () {
    var szamlalo = eredmeny.length;   
    var beir = document.getElementById("beir").value;   // input mező értéke

    if (tarolo.includes(beir)) {
        document.getElementById("kijelez1").innerHTML = "Ez már szerepel a beírtak közt!";
    }
    else {
        if (eredmeny.includes(beir)) {
            tarolo.push(beir);
            document.getElementById("kijelez1").innerHTML = "Talált! Még ennyi szót kell eltalálnia: " + (szamlalo - tarolo.length);
                if (tarolo.length === szamlalo) {
                    document.getElementById("kijelez1").innerHTML = "Gratulálunk, eltalálta az összes szót!";
                    ertekeles();   // lsd. később!
                }
        }
        else {
            document.getElementById("kijelez1").innerHTML = 
                "Sajnos nem talált, próbálkozzon tovább! Még ennyi szót kell eltalálnia: " + (szamlalo - tarolo.length);
        }
    }
}

// Az összes szó eltalálása után kiírja az nyerő szavakat
function ertekeles() {
    var kiir = [];
    for (index = 0; index < tarolo.length; index++) {
        if (kiir.includes(tarolo[index])){
            continue;
        } else {
            kiir.push(tarolo[index]);
        }
    }
    // console.log(kiir);
    document.getElementById("kijelez2").innerHTML = "Ezek a szavak voltak: " + kiir;
}