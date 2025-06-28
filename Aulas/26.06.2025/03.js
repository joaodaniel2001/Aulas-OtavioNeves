
let soma = 0;

function ocultar() {
    const h1 = document.getElementById("h1");
    soma ++;

    if (soma % 2 == 0) {
        h1.style.visibility = "hidden";
    } else {
        h1.style.visibility = "visible";
    }
}