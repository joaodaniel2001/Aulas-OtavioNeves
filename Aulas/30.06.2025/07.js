
const img = document.getElementById("img");

function diminuir () {
    const largura = img.width;
    img.style.width = `${largura * 0.8}px`;
}

function aumentar () {
    const largura = img.width;
    img.style.width = `${largura * 1.2}px`;
}
