const currentFirstEl = document.getElementById("currency-first");
const currentSecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");


updateCurrency();
function updateCurrency() {
    fetch(`https://v6.exchangerate-api.com/v6/538886c7b67b36bd75faf05b/latest/${currentFirstEl.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[currentSecondEl.value];
        exchangeRateEl.innerText = `1 ${currentFirstEl.value} = ${rate} ${currentSecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    })
}

currentFirstEl.addEventListener("change", updateCurrency);
currentSecondEl.addEventListener("change", updateCurrency);
worthFirstEl.addEventListener("input", updateCurrency);