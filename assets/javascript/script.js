const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = (peso / (altura * altura)).toFixed(1);
    // console.log(imc);

    if(peso==0 || altura==0){
        alert("Valores Inválidos.");
        return;
    }

    const result = document.getElementById("result");

    document.getElementById("infos").classList.remove("hidden");

    let description = "";

    result.textContent = imc.replace(".", ",");

    if (imc < 18.5) {
        description = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        description = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        description = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        description = "Obesidade moderada";
    } else if (imc >= 35 && imc <= 39.9) {
        description = "Obesidade severa";
    } else if (imc >= 40) {
        description = "Obesidade mórbida";
    }

    document.getElementById("description").textContent = description;
});
