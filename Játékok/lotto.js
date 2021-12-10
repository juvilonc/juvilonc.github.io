//* Lottó Játék */

// "Bevitel" gombra kattintva a felhasználó beír 5 db 1 és 90 közötti számot. Különböző hibák esetén alert. A számokat kiírjuk.
var tarolo = [];  // ebben a tömbben gyűlnek a beírt számok 

document.getElementById("bevitel").onclick = function () {
    var szam = parseInt(document.getElementById("szamok").value);   // input mező értéke Number típusúként
    if (tarolo.length < 5) {
        if (tarolo.includes(szam)) {
            alert("Ezt a számot már írta!");
        }
        else {
            if ((szam > 0) && (szam <= 90)){ 
                tarolo.push(szam);   // a beírt szám bekerül a "tarolo" tömbbe
                document.getElementById("kiir").innerHTML = tarolo;   // a számok kiírása
                document.getElementById("szamok").value = "";  // újra üres lesz az input mező
            }
            else {
                alert("A szám nem megfelelő.");
            }
        }
    }
    else {
        alert("Már beírt öt számot.\nNyomja meg a 'Sorsolás' gombot!");
    }
}

// "Sorsolás" gombra kattintva megjelenik 5 db 1 és 90 közötti random szám 
document.getElementById("sorsol").onclick = function () {
    document.getElementById("nyero").innerHTML = "";   // üres a kiírás helye! (ha többször lesz sorsolás...)
    var sorsoltSzamok = [];   // ebben a tömbben gyűlnek a sorsolt számok
    var i = 0;
    var nyeroSzam;
    while (i < 5) {
        nyeroSzam = Math.floor((Math.random() * 90) + 1);   // 1 és 90 közötti random számok (1 és 90 is benne lehet)
        if (sorsoltSzamok.includes(nyeroSzam)) {    // ha megint ugyanaz a szám kerülne elő...
            continue;
        }
        else {
            sorsoltSzamok.push(nyeroSzam);   // a generált számok bekerülnek a "sorsoltSzamok" tömbbe
        }
        i++;
    }
    document.getElementById("nyero").innerHTML = sorsoltSzamok;   // a számok kiírása

    // kiértékelés
    var joSzamok = [];   // ebben a tömbben gyűlnek az eltalált számok
    for (i = 0; i < tarolo.length; i++) {   // végigmegy a beírt számokon
        if (sorsoltSzamok.includes(tarolo[i])) {   // ha a sorsolt számokban benne van...
            joSzamok.push(tarolo[i]);   //...beteszi a "joSzamok" tömbbe
        }
    }
    var talalt = joSzamok.length;
    var szoveg = "";
    switch (talalt) {
        case 1:
            szoveg = `1 találat! Ez a szám volt nyerő: ${joSzamok}`;   // a kiírás tesztelése miatt az 1 találatot is jelzi
            break;
        case 2:
            szoveg = `2 találat! Ezek a számok voltak nyerők: ${joSzamok}`;
            break;
        case 3:
            szoveg = `3 találat! Ezek a számok voltak nyerők: ${joSzamok}`;
            break;
        case 4:
            szoveg = `4 találat! Ezek a számok voltak nyerők: ${joSzamok}`;
            break;
        case 5:
            szoveg = `Telitalálat! Ezek a számok voltak nyerők: ${joSzamok}`;
    }
    if (szoveg.length > 0) {    // csak akkor ír ki szöveget, ha van találat, így nem lesz üres sor
        document.getElementById("eredmeny").innerHTML += `${szoveg}<br>`;  // többszöri sorsolás eredményei mind látszanak egymás alatt
    }
}