/* Ez alapján készült: Internetről: Ania Kubow videója, és a GitHub-n a kódja */

document.addEventListener('DOMContentLoaded', () => {
    // A kártyák tömbje, minden kép 2x szerepel!
    const cardArray = [
        {
            name: 'level',
            img: 'images/level.png'
        },
        {
            name: 'level',
            img: 'images/level.png'
        },
        {
            name: 'lila',
            img: 'images/lila.png'
        },
        {
            name: 'lila',
            img: 'images/lila.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'piroszold',
            img: 'images/piroszold.png'
        },
        {
            name: 'piroszold',
            img: 'images/piroszold.png'
        },
        {
            name: 'sarga',
            img: 'images/sarga.png'
        },
        {
            name: 'sarga',
            img: 'images/sarga.png'
        },
        {
            name: 'vorosbarna',
            img: 'images/vorosbarna.png'
        },
        {
            name: 'vorosbarna',
            img: 'images/vorosbarna.png'
        }
    ];

    //cardArray.sort(() => 0.5 - Math.random());   // a kártyák keverése

    // kártyák keverése Fischer-Yates módszerrel:
    function randCards() {
        var newpos;
        var templ;
        for (let i = cardArray.length - 1; i > 0; i--) {
            newpos = Math.floor(Math.random() * (i + 1));
            templ = cardArray[i];
            cardArray[i] = cardArray[newpos];
            cardArray[newpos] = templ;
        }
    }

    const grid = document.querySelector('.grid');   // játéktábla helye
    const resultDisplay = document.querySelector('#result');  // eredmény kiírás helye
    var cardsChosen = [];   // itt lesznek a választott kártyák nevei
    var cardsChosenId = [];  // itt lesznek a választott kártyák Id-jei
    var cardsWon = [];  // itt lesznek a megtalált kártyák
    
    // a játéktábla létrehozása
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {   // ciklussal végigmegy a kártyák tömbjén:
            var card = document.createElement('img');   // img tagek létrehozása
            card.classList.add('cards');   // hozzáadni a cards osztályt (css miatt érdekes)
            card.setAttribute('src', 'images/hatul.png');   // beállítja a kártyák hátoldalát
            /* data attribútomból bármennyi lehet egy elementnél,
            akkor használjuk, ha adatot akarunk hozzákapcsolni:
            */
            card.setAttribute('data-id', i);  // minden kártyának ad egy id-t (0-11)
            card.addEventListener('click', flipCard);   // kattintás eseményre figyel, és meghívja a flipCard fgv.-t
            grid.appendChild(card);  // kártyák hozzáadása a játéktáblához
        }
        
    }

    // kártya kiválasztása(felütése) kattintással
    function flipCard() {
        var cardId = this.getAttribute('data-id');   // a kártya Id-jának lekérdezése 
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);   // a kártya képét beállítja az Id alapján
        if (cardsChosen.length === 2) {
           setTimeout(checkForMatch, 500)   // ha 2 kártya kiválasztva, akkor fél mp múlva meghívja a checkForMatch fgv.-t
        }
    }

    // párok egyezőségének ellenőrzése
    function checkForMatch() {
        var cards = document.querySelectorAll('img');  // a kártyák helye
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {    // ha ugyanarra kattintott mégegyszer
            cards[optionOneId].setAttribute('src', 'images/hatul.png');   // a kártya hátulja látszódjon
            cards[optionTwoId].setAttribute('src', 'images/hatul.png');
            alert("Ugyanarra a kártyára klikkelt");
            
        }else if (cardsChosen[0] === cardsChosen[1]) {
            alert("Talált egy párt!");
            cards[optionOneId].setAttribute('src', 'images/alapkep.png');  // a tábla képe látszódjon
            cards[optionTwoId].setAttribute('src', 'images/alapkep.png');
            cards[optionOneId].removeEventListener('click', flipCard);    // kattintás esemény figyelésének törlése 
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);  // a nyerő tömbbe teszi a talált pár kártyájának nevét
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/hatul.png');   // a kártya hátulja látszódjon
            cards[optionTwoId].setAttribute('src', 'images/hatul.png');
            alert("Sajnos nem talált.")
        }

        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length;   // az eredmény kiírása
        if (cardsWon.length === cardArray.length / 2 ) {   // a cardsWon tömbben már nem duplázva vannak a kártyák!!
            resultDisplay.textContent = "Gratulálunk, megtalálta az összes párt!";
        }
    }

    createBoard();
    randCards();
})