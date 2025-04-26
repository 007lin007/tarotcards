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

// 星座運勢資料

const zodiacFortunes = {
 "牡羊座": [
  "今天展現勇氣，迎向挑戰。",
  "冒險精神旺盛，適合新嘗試。",
  "果斷行動，成就自我。",
  "主動出擊，突破困境。",
  "充滿活力，適合積極拓展。",
  "不怕失敗，持續前進。",
  "自信是今天的關鍵武器。",
  "堅持信念，勇往直前。",
  "新的旅程即將開啟。",
  "今日適合展現領導力。",
  "直覺敏銳，信任自己。",
  "保持熱情，激發潛能。",
  "勇敢擁抱改變。",
  "適合嘗試新的挑戰。",
  "今天是行動力爆發的一天。",
  "堅持理想，不輕言放棄。",
  "適合冒險與探索。",
  "善用能量突破限制。",
  "相信自己，創造奇蹟。",
  "今天適合挑戰極限。",
  "帶著決心邁步前行。",
  "堅定目標，勇敢實踐。",
  "新的機會就在眼前。",
  "積極行動，開創新局。",
  "適合展現真實自我。",
  "果斷決策，掌握主導權。",
  "保持自信，不畏艱難。",
  "今天充滿無限可能。",
  "以熱情面對每個挑戰。",
  "跨出舒適圈，成就非凡。"
]

  "金牛座": [
  "穩扎穩打，穩步前行。",
  "適合規劃長期目標。",
  "耐心是今日的關鍵。",
  "堅持自己的節奏。",
  "今日宜務實行事。",
  "守護已有成果。",
  "適合細水長流的努力。",
  "慢慢累積，穩定成長。",
  "注重細節，避免失誤。",
  "堅持到底，收穫豐碩。",
  "適合理財與資源管理。",
  "專注完成既定目標。",
  "保持冷靜，從容應對挑戰。",
  "穩定情緒，踏實向前。",
  "務實態度帶來成功。",
  "適合培養新技能。",
  "今天適合整理生活細節。",
  "腳踏實地最為重要。",
  "堅守價值，堅定信念。",
  "穩中求進，成果可期。",
  "今日適合耐心耕耘。",
  "持續努力，厚積薄發。",
  "維持自律，收穫豐厚。",
  "享受穩定帶來的幸福感。",
  "適合緩慢卻穩定地推進

  "雙子座": [...Array(30).fill("今天靈活應變，開拓新局。")],
  "巨蟹座": [...Array(30).fill("今天關懷自己與家人。")],
  "獅子座": [...Array(30).fill("今天展現自信，綻放光芒。")],
  "處女座": [...Array(30).fill("今天細心規劃，成就未來。")],
  "天秤座": [...Array(30).fill("今天追求平衡，和諧共處。")],
  "天蠍座": [...Array(30).fill("今天堅定信念，迎難而上。")],
  "射手座": [...Array(30).fill("今天冒險探索，擴展視野。")],
  "摩羯座": [...Array(30).fill("今天踏實努力，穩步成功。")],
  "水瓶座": [...Array(30).fill("今天創意無限，突破框架。")],
  "雙魚座": [...Array(30).fill("今天傾聽直覺，感受幸福。")]
};
