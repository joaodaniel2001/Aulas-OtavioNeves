

const h1 = document.querySelector("#h1");
const p = document.querySelector("#p");

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {
    console.log("oi")
    h1.textContent = "Malwee > WEG";
    p.textContent = "Maik s2 Renan";
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
    h1.textContent = "AI PSII 2025/1 V1"
    p.textContent = "Malwee"
})