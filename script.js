function comparar() {
  const itemReais = parseFloat(document.getElementById("itemReais").value);
  const itemGold = parseFloat(document.getElementById("itemGold").value);
  const precoGoldReal = parseFloat(document.getElementById("precoGoldReal").value);

  if (isNaN(itemReais) || isNaN(itemGold) || isNaN(precoGoldReal)) {
    document.getElementById("resultado").innerText = "Preencha todos os campos corretamente.";
    return;
  }

  // 🧱 Valor do item em reais via gold
  const valorGoldReais = (itemGold / 500) * precoGoldReal;

  // 📊 Comparação
  let vantagem = "";
  if (itemReais < valorGoldReais) {
    vantagem = "💵 Vale mais a pena comprar com reais.";
  } else if (itemReais > valorGoldReais) {
    vantagem = "🪙 Vale mais a pena comprar com gold.";
  } else {
    vantagem = "⚖️ O custo é equivalente nas duas opções.";
  }

  document.getElementById("resultado").innerHTML = `
    <p>💵 Custo do item em reais: R$ ${itemReais.toFixed(2)}</p>
    <p>🧱 Custo do item em reais via gold: R$ ${valorGoldReais.toFixed(2)}</p>
    <p>${vantagem}</p>
  `;
}
