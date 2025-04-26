// === 日期設定 ===
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const todayKey = `${year}-${month}-${day}`;
const dayOfYear = Math.floor((today - new Date(year, 0, 0)) / 86400000);

// === 每日代碼表 ===
const dailyCodes = {
  "2025-4-28": "M4X9B2",
  "2025-4-29": "Z8C1A5",
  "2025-4-30": "R7D2K8",
  "2025-5-1":  "H5Q4Z1",
  "2025-5-2":  "T9J3M6",
  "2025-5-3":  "P6A7L4",
  "2025-5-4":  "W3N8X7"
};

const universalCode = "FREEPASS";

// === 塔羅牌資料 ===
const tarotCards = [
  { name: "愚者", description: "今天是探索與自由的開始，勇敢前進吧。" },
  { name: "魔術師", description: "掌握手中的資源，今天適合主動創造機會。" },
  { name: "女祭司", description: "內在智慧引導你，今天適合傾聽直覺。" }
];

// === 代碼驗證 ===
function verifyCode(inputCode) {
  const inputUpper = inputCode.toUpperCase();

  if (inputUpper === universalCode) {
    return true;
  }

  const todayCode = dailyCodes[todayKey];
  const todayCodeUpper = todayCode ? todayCode.toUpperCase() : "";
  const hasUsed = localStorage.getItem('codeUsed_' + todayKey);

  if (inputUpper === todayCodeUpper && !hasUsed) {
    localStorage.setItem('codeUsed_' + todayKey, 'true');
    return true;
  }

  return false;
}

// === 抽塔羅牌 ===
function drawCard() {
  const code = document.getElementById("codeInput").value.trim();
  const cardContainer = document.getElementById("cardContainer");
  const resultDiv = document.getElementById("cardResult");
  const zodiacSection = document.getElementById("zodiacSection");

  if (!verifyCode(code)) {
    resultDiv.innerHTML = "<p style='color:red;'>❌ 無效或已使用過的代碼，請確認！</p>";
    return;
  }

  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  cardContainer.innerHTML = `
    <div class="card">
      <div class="date-label">${year}年${month}月${day}日</div>
      <h3>🃏 ${card.name}</h3>
      <p>${card.description}</p>
    </div>
  `;
  zodiacSection.style.display = "block";
}

// === 顯示星座運勢 ===
function showZodiacFortune() {
  const zodiacInput = document.getElementById("zodiacInput").value.trim();
  const fortuneResult = document.getElementById("fortuneResult");

  if (!zodiacFortunes[zodiacInput]) {
    fortuneResult.innerHTML = "<p style='color:red;'>❌ 請輸入正確的中文星座（例如：獅子座）</p>";
    return;
  }

  const fortuneList = zodiacFortunes[zodiacInput];
  const todayIndex = (dayOfYear - 1) % fortuneList.length;

  fortuneResult.innerHTML = `
    <div class="card">
      <div class="date-label">${year}年${month}月${day}日 今日運勢</div>
      <h3>🔮 ${zodiacInput} - 今日指引</h3>
      <p>${fortuneList[todayIndex]}</p>
    </div>
  `;
}

// === 星座運勢 ===
const zodiacFortunes = {
  "獅子座": ["今天勇敢表達你的想法...", "..."],
  // 其他星座資料，請自行補上完整內容
};