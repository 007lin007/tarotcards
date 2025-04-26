// 日期設定
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const todayKey = `${year}-${month}-${day}`;
const dayOfYear = Math.floor((today - new Date(year, 0, 0)) / 86400000);

// 每日代碼表
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

// 塔羅牌資料
const tarotCards = [
  { name: "愚者", description: "今天是探索與自由的開始，勇敢前進吧。" },
  { name: "魔術師", description: "掌握手中的資源，今天適合主動創造機會。" },
  { name: "女祭司", description: "內在智慧引導你，今天適合傾聽直覺。" }
];

// 新版代碼驗證
function verifyCode(inputCode) {
  const inputUpper = inputCode.toUpperCase();

  if (inputUpper === universalCode) {
    return "freepass";
  }

  const todayCode = dailyCodes[todayKey];
  const todayCodeUpper = todayCode ? todayCode.toUpperCase() : "";
  const hasUsed = localStorage.getItem('codeUsed_' + todayKey);

  if (inputUpper === todayCodeUpper && !hasUsed) {
    localStorage.setItem('codeUsed_' + todayKey, 'true');
    return "todaypass";
  }

  return "fail";
}

// 新版抽塔羅牌流程
function drawCard() {
  const code = document.getElementById("codeInput").value.trim();
  const cardContainer = document.getElementById("cardContainer");
  const resultDiv = document.getElementById("cardResult");
  const zodiacSection = document.getElementById("zodiacSection");

  const verifyResult = verifyCode(code);

  if (verifyResult === "fail") {
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

// 顯示星座運勢
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

// === 內建星座運勢資料 ===

const zodiacFortunes = {
  "牡羊座": ["今日展現勇氣。", "迎接新挑戰。", "勇敢表達自我。", "行動帶來突破。", "自信是關鍵。",
          "專注當下。", "充滿活力的一天。", "挑戰自己極限。", "新計畫適合啟動。", "保持冒險精神。",
          "相信第一直覺。", "用熱情感染他人。", "勇於改變現狀。", "突破舊有模式。", "今天適合領導。",
          "把握時機出手。", "適合拓展領域。", "展現無畏精神。", "今天運勢強勁。", "心態決定成敗。",
          "迎接嶄新契機。", "活出精彩自己。", "專注目標前進。", "衝破障礙限制。", "堅持信念。",
          "今天非常適合行動。", "適合打開新局。", "帶著希望前行。", "快速果斷是優勢。", "堅定步伐。"],
  "金牛座": ["腳踏實地前行。", "慢慢累積成功。", "今天穩定重要。", "適合深耕細作。", "守住自己的節奏。",
          "安心享受當下。", "穩健理財運上升。", "耐心是力量。", "投資自我最重要。", "今日宜守不宜攻。",
          "感受小確幸。", "調整節奏步伐。", "穩扎穩打最安心。", "累積微小成果。", "今天適合整理思緒。",
          "堅持原則。", "專注細節。", "享受生活美好。", "今天宜規劃未來。", "步步為營。",
          "固守成果。", "靜待好機會。", "適合關注健康。", "培養穩定感。", "沉住氣，等待時機。",
          "今日適合反思。", "生活節奏放慢。", "適合深度思考。", "種下未來種子。", "迎接緩慢變化。"],
  "雙子座": ["多角度看事情。", "適合靈活變通。", "交流互動佳。", "資訊運強旺。", "拓展人脈良機。",
          "今天宜學習新知。", "勇於表達想法。", "適合思考創意。", "保持開放心態。", "善用機智幽默。",
          "多元嘗試帶來收穫。", "適合討論合作。", "新鮮感帶來活力。", "適合輕鬆社交。", "靈感湧現。",
          "今天宜快速反應。", "保持彈性。", "適合短途移動。", "思維活躍。", "適合接收新資訊。",
          "多分享交流。", "適合拓展新領域。", "表達力大提升。", "適合短期計畫。", "放下猶豫行動。",
          "新點子萌芽。", "今天宜靈活調整。", "快速應變有利。", "適合廣結善緣。", "輕鬆面對挑戰。"],
  "巨蟹座": ["照顧內心感受。", "適合關懷家人。", "今天宜自我療癒。", "情緒敏感需呵護。", "適合安靜沉澱。",
          "家庭運旺盛。", "與摯友交流順利。", "適合回顧過去。", "細膩情感綻放。", "安心打造歸屬感。",
          "情感聯繫加深。", "關懷成為力量。", "內心安全感增強。", "適合療癒舊傷。", "適合重新整理生活。",
          "直覺特別靈敏。", "靜心是今日關鍵。", "適合深層連結。", "今天溫暖人心。", "關係修補良機。",
          "傾聽自己的聲音。", "今天情感細膩。", "適合築夢未來。", "用愛包容一切。", "適合慢慢前行。",
          "保護重要關係。", "內心指引方向。", "適合療癒自己。", "建立心靈堡壘。", "重拾溫柔力量。"],
  // 其他星座...（為簡潔這裡列4個示範）
};