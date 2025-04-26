// 今天的日期資訊
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const todayKey = `${year}-${month}-${day}`;
const dayOfYear = Math.floor((today - new Date(year, 0, 0)) / 86400000);

// 亂數每日代碼表（範例）
const dailyCodes = {
  "2025-4-28": "M4X9B2",
  "2025-4-29": "Z8C1A5",
  "2025-4-30": "R7D2K8",
  "2025-5-1": "H5Q4Z1",
  "2025-5-2": "T9J3M6",
  "2025-5-3": "P6A7L4",
  "2025-5-4": "W3N8X7"
};

// 通用無限次代碼
const universalCode = "FREEPASS";

// 塔羅牌（可以自己加更多）
const tarotCards = [
  { name: "愚者", description: "今天是探索與自由的開始，勇敢前進吧。" },
  { name: "魔術師", description: "掌握手中的資源，今天適合主動創造機會。" },
  { name: "女祭司", description: "內在智慧引導你，今天適合傾聽直覺。" }
];

// 星座運勢短句
const zodiacFortunes = {
  "獅子座": [
    "今天勇敢表達你的想法，將會贏得認同。",
    "今天適合主動出擊，展示自信的一面。",
    "專注在自己最熱愛的事情上，會有意想不到的收穫。",
    "別怕失敗，每個小錯誤都是成長的禮物。",
    "今天微笑面對困難，會讓你更強大。",
    "適合整理生活，讓空間和心靈都更清新。",
    "相信直覺，今天靈感特別強烈。",
    "主動關心朋友，友情會更深厚。",
    "適合做新嘗試，勇敢踏出舒適圈。",
    "今天適合規劃未來，訂下新目標。",
    "溫柔對待自己，也是一種成長。",
    "今天適合展現領導才能，大家會願意跟隨你。",
    "做事謹慎一點，小細節會帶來大成功。",
    "適合思考財務規劃，未來更有保障。",
    "今天保持耐心，成果會慢慢顯現。",
    "接受自己的不完美，就是最美的力量。",
    "適合分享想法，意外得到貴人幫助。",
    "今天靜下心來，聽聽內心真正的聲音。",
    "適合做運動，釋放壓力。",
    "別害怕改變，新環境會帶來新機會。",
    "用正面的態度面對挑戰，一切會變得更順利。",
    "今天適合閱讀或學習新知識。",
    "小心不要太衝動，三思而後行會更好。",
    "適合種下新的夢想種子，慢慢灌溉。",
    "用行動證明自己的實力，別光說不做。",
    "適合整理人際圈，留下真正重要的人。",
    "今天靜靜充電，準備迎接新的挑戰。",
    "不要小看自己的影響力，你比想像中更有力量。",
    "今天適合展現幽默感，讓氣氛更輕鬆。",
    "堅持自己的信念，未來會給你回報。"
  ],
  // 【下面接著貼處女座～雙魚座】...
};

// 驗證代碼
function verifyCode(inputCode) {
  const hasUsed = localStorage.getItem('codeUsed_' + todayKey);

  if (inputCode === universalCode) {
    return true; // 無限次通用代碼直接通過
  }

  if (inputCode === dailyCodes[todayKey] && !hasUsed) {
    localStorage.setItem('codeUsed_' + todayKey, 'true');
    return true; // 當天代碼且沒使用過
  }

  return false; // 其他錯誤或已使用
}

// 抽塔羅牌流程
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
