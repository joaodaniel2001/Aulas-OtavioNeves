
let soma = 0;

function alteraIMG() {
    const img = document.getElementById ("img");

    if (soma % 2 == 0) {
        img.setAttribute ("src", "https://m.media-amazon.com/images/M/MV5BZDE2ZjIxYzUtZTJjYS00OWQ0LTk2NGEtMDliYmI3MzMwYjhkXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg");
    } else {
        img.setAttribute ("src", "https://i.ibb.co/rWqwLNP/image-removebg-preview-2.png");
    }

    soma ++;
}