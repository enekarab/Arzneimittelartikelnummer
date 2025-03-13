function isValidPZN() {
    var input = document.getElementById("PZN").value.trim();

    if (isNaN(input)) {
        alert("Bitte nur Zahlen eingeben!");
        return;
    } else if (input.length < 7) {
        alert("Die eingegebene Zahl hat weniger als 7 Ziffern!");
        return;
    }



    var sum = (input[0] * 3) + (input[1] * 1) + (input[2] * 3) + (input[3] * 1) + (input[4] * 3) + (input[5] * 1);

    var rest = (11 - (sum % 11)) % 11;

    var output = document.getElementById("output");
    if (rest == input[6]) {
        output.innerHTML = "Die PZN " + input + " ist gültig.";
    } else {
        output.innerHTML = "Die PZN " + input + " ist ungültig. Erwartete Prüfziffer: " + rest;
    }
}