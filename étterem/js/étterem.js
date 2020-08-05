function calcAmount() {
    let price = 1200;
    let quantityInput = document.querySelector("input[name='quantity']");
    let quantityNumber = parseInt(quantityInput.value);
    quantityNumber = isNaN(quantityNumber)?0:quantityNumber;
    let extraInput = document.querySelector("input[name=extra]:checked");
    let extra = parseInt(extraInput.value);
    showSumPrice(price, quantityNumber, extra);
}   
function showSumPrice(price, quantityNumber, extra)  {  
    let showAmount = document.querySelector("span.show-amount");
    
    if (quantityNumber>10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (quantityNumber<1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = (price + extra) * quantityNumber; 
        showAmount.innerHTML = amount;
    }
}
var temperatures = [-5, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
var felsőértékek = [0, 15, 20, 25, 30];
var kínálat = ["Forró csoki", "Meleg tea","Finom süti", "Fagyi", "Jéghideg limonádé"];
function weatherW() {
    const napok = document.querySelector("#napok");
    const days = parseInt(napok.value);
    const hőmérséklet = document.querySelector("span#temp");
    hőmérséklet.innerHTML = temperatures[days];
    const ajánlat = document.querySelector("span#ajánlatok");

    let i;
    let len = felsőértékek.length;
    for (i=0; i<len; i++) {
        if (temperatures[days] <= felsőértékek[i]) {
            ajánlat.innerHTML = "<span#ajánlatok>" + kínálat[i] + "</span>";
        break;
        }
    }
}


         
        
    






    











