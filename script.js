function comparar() {
  const cash = parseFloat(document.getElementById("cash").value);
  const precoGoldPorMil = parseFloat(document.getElementById("precoGoldPorMil").value);
  const precoGoldReal = parseFloat(document.getElementById("precoGoldReal").value);

  if (isNaN(cash) || isNaN(precoGoldPorMil) || isNaN(precoGoldReal)) {
    document.getElementById("resultado").innerText = "Preencha todos os campos corretamente.";
    return;
  }

  // 💸 Custo em reais via site
  const valorReaisSite = (cash * 0.0025).toFixed(2);

  // 🪙 Custo em gold via mercado
  const valorGoldKK = (cash / 1000) * precoGoldPorMil;

  // 🧱 Custo em reais para comprar esse gold
  const valorReaisGold = ((valorGoldKK / 1000000000) * precoGoldReal).toFixed(2);

  // ✅ Comparação
  let vantagem = "";
  if (valorReaisSite < valorReaisGold) {
    vantagem = "💰 Vale mais a pena comprar com cash do site.";
  } else if (valorReaisSite > valorReaisGold) {
    vantagem = "🪙 Vale mais a pena comprar com gold comprado em reais.";
  } else {
    vantagem = "⚖️ O custo é equivalente nas duas opções.";
  }

  document.getElementById("resultado").innerHTML = `
    <p>💵 Custo em reais via site: R$ ${valorReaisSite}</p>
    <p>🪙 Custo em gold: ${valorGoldKK.toFixed(2)}kk</p>
    <p>🧱 Custo em reais via gold: R$ ${valorReaisGold}</p>
    <p>${vantagem}</p>
  `;
}
