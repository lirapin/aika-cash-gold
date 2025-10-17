function comparar() {
  const itemReais = parseFloat(document.getElementById("itemReais").value);
  const itemGold = parseFloat(document.getElementById("itemGold").value);
  const precoGoldReal = parseFloat(document.getElementById("precoGoldReal").value);
  const goldPorCash = parseFloat(document.getElementById("goldPorCash").value);

  if (isNaN(itemReais) || isNaN(itemGold) || isNaN(precoGoldReal) || isNaN(goldPorCash)) {
    document.getElementById("resultado").innerText = "Preencha todos os campos corretamente.";
    return;
  }

  // 💰 Valor do gold em reais (1kk)
  const valor1kkGold = precoGoldReal / 500;

  // 🧮 Valor do item em gold convertido para reais
  const valorItemGoldReais = itemGold * valor1kkGold;

  // 📏 Valor de referência do gold via cash
  const valorCashReais = 25; // fixo: 10.000 cash = R$25
  const valor1kkGoldReferencia = valorCashReais / goldPorCash;

  let vantagem = "";
  if (itemReais < valorItemGoldReais) {
    vantagem = "💵 Vale mais a pena comprar com reais.";
  } else if (itemReais > valorItemGoldReais) {
    vantagem = "🪙 Vale mais a pena comprar com gold.";
  } else {
    vantagem = "⚖️ O custo é equivalente nas duas opções.";
  }

  let statusMercado = "";
  if (valor1kkGold > valor1kkGoldReferencia) {
    statusMercado = "📈 O gold está acima da referência de mercado.";
  } else if (valor1kkGold < valor1kkGoldReferencia) {
    statusMercado = "📉 O gold está abaixo da referência de mercado.";
  } else {
    statusMercado = "📊 O gold está exatamente na referência de mercado.";
  }

  document.getElementById("resultado").innerHTML = `
    <p>💵 Custo do item em reais: <strong>R$ ${itemReais.toFixed(2)}</strong></p>
    <p>🧱 Custo do item via gold: <strong>R$ ${valorItemGoldReais.toFixed(2)}</strong></p>
    <p>${vantagem}</p>
    <hr>
    <p>📏 Valor de 1kk de gold: <strong>R$ ${valor1kkGold.toFixed(2)}</strong></p>
    <p>📐 Valor de referência (via cash): <strong>R$ ${valor1kkGoldReferencia.toFixed(2)}</strong></p>
    <p>${statusMercado}</p>
  `;
}
