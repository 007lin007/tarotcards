const tarotCards = [
  { name: "The Fool", meaning: "新的開始，自由，冒險" },
  { name: "The Magician", meaning: "掌握資源，實現願望" },
  { name: "The High Priestess", meaning: "直覺，潛意識，神祕" },
  { name: "The Empress", meaning: "豐饒，母性，自然" },
  { name: "The Emperor", meaning: "穩定，結構，領導" },
  { name: "The Hierophant", meaning: "傳統，信仰，導師" },
  { name: "The Lovers", meaning: "關係，選擇，愛" },
  { name: "The Chariot", meaning: "勝利，意志力，控制" },
  { name: "Strength", meaning: "內在力量，勇氣，耐心" },
  { name: "The Hermit", meaning: "尋找真理，內省，孤獨" },
  { name: "Wheel of Fortune", meaning: "命運轉變，週期，機會" },
  { name: "Justice", meaning: "公平，因果，真相" },
  { name: "The Hanged Man", meaning: "暫停，轉變觀點，放下" },
  { name: "Death", meaning: "結束，重生，蛻變" },
  { name: "Temperance", meaning: "平衡，節制，融合" },
  { name: "The Devil", meaning: "束縛，誘惑，慾望" },
  { name: "The Tower", meaning: "突發改變，覺醒，崩壞" },
  { name: "The Star", meaning: "希望，靈感，療癒" },
  { name: "The Moon", meaning: "幻覺，潛意識，迷惘" },
  { name: "The Sun", meaning: "快樂，成功，光明" },
  { name: "Judgement", meaning: "覺醒，反省，重生" },
  { name: "The World", meaning: "完成，整合，自由" },
];

function drawCard() {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const card = tarotCards[randomIndex];

  // 顯示牌名與意義
  const result = document.getElementById("result") || document.createElement("div");
  result.id = "result";
  result.innerHTML = `<h2>${card.name}</h2><p>${card.meaning}</p>`;
  document.body.appendChild(result);

  // 顯示圖片
  const imageContainer = document.getElementById("image-container") || document.createElement("div");
  imageContainer.id = "image-container";
  imageContainer.innerHTML = "";

  const img = document.createElement("img");
  const filename = card.name.toLowerCase().replace(/\s/g, "-") + ".jpg";
  img.src = `cards/${filename}`;
  img.alt = card.name;
  img.style.maxWidth = "300px";
  img.style.marginTop = "10px";

  imageContainer.appendChild(img);
  document.body.appendChild(imageContainer);
}
