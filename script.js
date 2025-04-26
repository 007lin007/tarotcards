const dailyCodes = {
  "2025-4-28": "M4X9B2",
  "2025-4-29": "Z8C1A5",
  "2025-4-30": "R7D2K8",
  "2025-5-1":  "H5Q4Z1",
  "2025-5-2":  "T9J3M6",
  "2025-5-3":  "P6A7L4",
  "2025-5-4":  "W3N8X7"
};

const universalCode = "FREEPASS"; // 無限次使用的通用代碼

const today = new Date();
const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const validTodayCode = dailyCodes[todayKey];

// 驗證代碼
function verifyCode(inputCode) {
  const hasUsed = localStorage.getItem('codeUsed_' + todayKey);
  
  if (inputCode === universalCode) {
    return true; // 無限次通用代碼，直接通過
  }
  
  if (inputCode === validTodayCode && !hasUsed) {
    localStorage.setItem('codeUsed_' + todayKey, 'true');
    return true; // 今天第一次正確輸入，允許
  }
  
  return false; // 錯誤，或已使用過
}

// 當按下「抽牌」時
function drawCard() {
  const code = document.getElementById("codeInput").value.trim();
  const cardContainer = document.getElementById("cardContainer");
  const resultDiv = document.getElementById("cardResult");
  const zodiacSection = document.getElementById("zodiacSection");

  if (!verifyCode(code)) {
    resultDiv.innerHTML = "<p style='color:red;'>❌ 無效或已使用過的代碼，請確認！</p>";
    return;
  }

  // 成功進入抽牌流程（這裡你原本的抽牌邏輯不變）
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  cardContainer.innerHTML = `
    <div class="card">
      <div class="date-label">${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日</div>
      <h3>🃏 ${card.name}</h3>
      <p>${card.description}</p>
    </div>
  `;
  zodiacSection.style.display = "block";
}
