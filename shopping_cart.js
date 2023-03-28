let prices = document.querySelectorAll(".price");
let isDiscount = false;
let priceOne = parseInt(prices[0].textContent);
let priceTwo = parseInt(prices[1].textContent);
let priceThree = parseInt(prices[2].textContent);
let priceFour = parseInt(prices[3].textContent);

let totalPrice = priceOne + priceTwo + priceThree + priceFour;
const textTotal = "Итого: ";
const currency = " руб.";

let sum = document.querySelector(".total");
sum.textContent = textTotal + totalPrice + currency;

let button = document.querySelector(".discountBtn");
button.addEventListener("click", function () {
    if (!isDiscount) {
        sum.textContent = `${textTotal} ${totalPrice - totalPrice * 0.2
            } ${currency}`;
        priceOne = priceOne - priceOne * 0.2;
        console.log(priceOne);
        prices[0].textContent = priceOne + " руб.";
        priceTwo = priceTwo - priceTwo * 0.2;
        prices[1].textContent = priceTwo + " руб.";
        priceThree = priceThree - priceThree * 0.2;
        prices[2].textContent = priceThree + " руб.";
        priceFour = priceFour - priceFour * 0.2;
        prices[3].textContent = priceFour + " руб.";
        isDiscount = true;
    } else {
        alert("Купон уже применён!");
    }
});