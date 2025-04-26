function drawCard() {
  const inputCode = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("cardResult");
  const cardContainer = document.getElementById("cardContainer");

  if (inputCode !== validCode) {
    resultDiv.innerText = "❌ 代碼錯誤，請確認您是會員並輸入正確代碼。";
    return;
  }

  const drawn = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  cardContainer.innerHTML = `<img src="cards/${drawn.image}" alt="${drawn.name}" style="width:200px;">`;

  resultDiv.innerHTML = `🃏 您抽到的是：<br><strong>${drawn.name}</strong><br>${drawn.description}`;
}
