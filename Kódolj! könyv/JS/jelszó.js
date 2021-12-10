function jelszóEllenőrzés() {
    let jelszó = document.querySelector("#belépés");
    let beírtJelszó = jelszó.value;
    if (beírtJelszó === "Gyém3106") {
        return true;
    }
    alert ("Hozzáférés megtagadva!");
    return false;
}