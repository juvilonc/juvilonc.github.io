let price = 1200;
let extra = 300;

function calcAmount() {
    let quantityInput = document.querySelector("input[name='quantity']");
    let showAmount = document.querySelector("span.show-amount");
    let extraFeltét = document.querySelectorAll("input[type='radio']");
    let amount = (parseInt(quantityInput.value) * price) + (parseInt(quantityInput.value) * extra);
    showAmount.innerHTML = amount;
}


