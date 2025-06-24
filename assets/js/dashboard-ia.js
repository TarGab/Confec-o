document.addEventListener("DOMContentLoaded", () => {
  const iaInsights = [
    "📦 Estoque de tecido vermelho abaixo de 15%. Reposição recomendada.",
    "🧵 Setor de costura operando 20% abaixo da média. Reavaliar produção.",
    "📈 Aumento de pedidos infantis previsto para próxima semana.",
    "⏱️ Linha de produção de acabamento em atraso médio de 12 minutos."
  ];
  const ul = document.getElementById("ia-dashboard");
  iaInsights.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
});
