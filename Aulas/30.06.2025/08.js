function somar() {
  const num01 = parseFloat(document.getElementById("num01").value);
  const num02 = parseFloat(document.getElementById("num02").value);

  const soma = num01 + num02;

  const h1 = (document.getElementById("h1").textContent = `${soma}`);
}
