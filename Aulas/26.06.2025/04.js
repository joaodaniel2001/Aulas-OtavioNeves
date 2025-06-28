
var num = 0;

const bnt = document.getElementById ("btn");
const h1 = document.getElementById ("h1");

bnt.addEventListener ("click", function () {
    num ++;
    h1.textContent = num;
})