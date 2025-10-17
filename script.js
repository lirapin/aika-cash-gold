function comparar() {
  const itemCash = parseFloat(document.getElementById("itemCash").value);
  const itemGold = parseFloat(document.getElementById("itemGold").value);
  const goldPorCash = parseFloat(document.getElementById("goldPorCash").value);
  const precoGoldReal = parseFloat(document.getElementById("precoGoldReal").value);

  if (isNaN(itemCash) || isNaN(itemGold) || isNaN(goldPorCash) || isNaN(precoGoldReal)) {
    document.getElementById("resultado").innerText = "Preencha todos os campos corretamente.";
    return;
  }

  // 💸 Valor do item em reais via cash
  const valorCashReais = itemCash * 0.0025;

  // 🧱 Valor do item em reais via gold
  const valorGoldReais = (itemGold / 500) * precoGoldReal;

  // 📊 Comparação
  let vantagem = "";
  if (valorCashReais < valorGoldReais) {
    vantagem = "💰 Vale mais a pena comprar com cash.";
  } else if (valorCashReais > valorGoldReais) {
    vantagem = "🪙 Vale mais a pena comprar com gold.";
  } else {
    vantagem = "⚖️ O custo é equivalente nas duas opções.";
  }

  document.getElementById("resultado").innerHTML = `
    <p>💵 Custo do item em reais via cash: R$ ${valorCashReais.toFixed(2)}</p>
    <p>🧱 Custo do item em reais via gold: R$ ${valorGoldReais.toFixed(2)}</p>
    <p>${vantagem}</p>
  `;
}
