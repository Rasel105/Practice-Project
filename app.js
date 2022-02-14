function updateProduct(product, price, isIncrease) {
    const displayNumber = document.getElementById(product + "-number");
    let displayNumberValue = displayNumber.value;
    if (isIncrease) {
        displayNumberValue = parseInt(displayNumberValue) + 1;
    } else if (displayNumberValue > 0) {
        displayNumberValue = parseInt(displayNumberValue) - 1;
    }

    displayNumber.value = displayNumberValue;
    const phonePrice = document.getElementById(product + "-total");
    const phonePriceTotal = displayNumberValue * price;
    phonePrice.innerText = phonePriceTotal;
    calculationTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculationTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal * 0.1;

    const grandTotal = subTotal + tax;

    document.getElementById("subtotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax.toFixed(1);
    document.getElementById("grand-total").innerText = grandTotal;
}

document.getElementById("phone-plus").addEventListener("click", function() {
    updateProduct("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function() {
    updateProduct("phone", 1219, false);
});

document.getElementById("case-plus").addEventListener("click", function() {
    updateProduct("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function() {
    updateProduct("case", 59, false);
});