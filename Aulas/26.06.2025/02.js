

const quadro = document.getElementById("quadro")

function randomico () {
    const numero = []
    for (var i = 0; i < 1; i++) {
        numero.push(Math.random() * 100000)
    }
    return Math.round(numero)
} 

const resp = randomico ()

const btn = document.getElementById("btn")
btn.addEventListener ("click", function () {
    const resp = randomico ()
    console.log(resp)

    const cor = `#${resp.toString(16).padStart(6, '0').slice(0, 6)}`
    quadro.style.backgroundColor = cor
})
