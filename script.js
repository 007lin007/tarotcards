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

// === 新版代碼驗證 ===
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

// === 新版抽塔羅牌流程 ===
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

// === 星座運勢 (請自行補齊資料) ===
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
"處女座": [
  "今天適合細心整理生活細節，讓一切更有條理。",
  "面對挑戰時，冷靜與智慧是你的最大武器。",
  "專注於當下的小事，成功自然累積。",
  "今天適合規劃未來，訂定實際可行的目標。",
  "與其擔心，不如行動，今日行動力大增。",
  "細膩的觀察會帶來重要的突破。",
  "保持開放心態，接受不同意見，成長更快。",
  "今天適合花時間充實自我，提升技能。",
  "耐心傾聽，比急著表達更有力量。",
  "細節決定成敗，今天特別留意小地方。",
  "做自己認為正確的事，不必在意他人眼光。",
  "適合審視自己的健康與生活習慣。",
  "相信努力的累積，今天的堅持會有回報。",
  "接受不完美，放下過度的自我要求。",
  "今天適合清理心靈，釋放負面情緒。",
  "保持謙虛，是今天的幸運秘訣。",
  "小小善意的舉動，會有意想不到的回報。",
  "用理性而溫柔的方式解決衝突。",
  "今天適合獨立完成重要任務。",
  "溫和而堅定地走自己的路。",
  "相信直覺，今天的感覺特別敏銳。",
  "今天適合給自己一點小小的獎勵。",
  "專注於個人成長，勝過比較與競爭。",
  "輕鬆看待失誤，把它當成學習機會。",
  "今天適合種下一個小小的夢想。",
  "心存感激，今天的你特別有吸引力。",
  "慢下腳步，才能看清方向。",
  "今天適合結束一段無效的習慣。",
  "耐心灌溉夢想的種子，很快就會發芽。",
  "相信自己是值得被愛、被肯定的。"
],
"天秤座": [
  "今天適合平衡工作與休息，保持身心健康。",
  "與人合作能帶來更多機會。",
  "保持冷靜，理性思考帶來好結果。",
  "適合表達你的想法與感受。",
  "今天適合修補一段關係。",
  "和諧是今天最重要的主題。",
  "多傾聽，少爭辯，容易得到支持。",
  "今天適合做決定，別再猶豫。",
  "以溫柔堅定的態度說出你的立場。",
  "今天適合欣賞藝術，提升靈感。",
  "給自己一段獨處的時間，整理內心。",
  "適合拓展人脈，結識新朋友。",
  "今天以和平取勝，避免正面衝突。",
  "別為小事生氣，保持微笑。",
  "適合做出一個重要且正確的選擇。",
  "用優雅態度處理突發狀況。",
  "主動表達感謝，讓關係更溫暖。",
  "今天適合重新審視合作關係。",
  "保持心情愉快，幸運會跟隨你。",
  "今天適合完成之前未解的事情。",
  "適合討論未來計劃，制定新目標。",
  "用理解代替指責，事情會更順利。",
  "溫和但堅定地守護自己的界線。",
  "今天適合種下一個新希望。",
  "多給自己一些讚美，提升自信。",
  "今天適合放下心中過多的顧慮。",
  "保持輕鬆，事情會自然而然解決。",
  "適合學習新技能，增強競爭力。",
  "專注當下，美好自然展現。",
  "今天適合訂一個小小的心願。"
],
"天蠍座": [
  "今天適合專心完成重要任務。",
  "用真誠打動他人，收穫信任。",
  "保持低調行事，效果更佳。",
  "適合深入思考，找到真正想要的答案。",
  "今天適合展現堅韌不拔的一面。",
  "冷靜面對挑戰，別急躁。",
  "今天適合釋放壓力，給自己喘息空間。",
  "信任自己的直覺，選擇正確方向。",
  "今天適合保護自己的情緒。",
  "善用觀察力，察覺重要細節。",
  "今天適合悄悄累積實力，等待爆發。",
  "適合做深度學習，提升自我價值。",
  "以行動證明你的決心。",
  "今天適合改善人際關係，解開誤會。",
  "適合保護個人隱私，保持神秘感。",
  "今天適合秘密策劃未來藍圖。",
  "內心堅定，今天能排除萬難。",
  "今天適合面對恐懼，並超越它。",
  "掌握節奏，穩步前進。",
  "善用今天的深層情感力量。",
  "今天適合勇敢地說出心底話。",
  "守護好自己的夢想，不受外界干擾。",
  "今天適合放手一段過時的執著。",
  "善於洞察人心，是你今天的優勢。",
  "今天適合自我療癒，修補內在裂縫。",
  "保持冷靜，勝過一切衝動反應。",
  "今天適合展現你的專業與深度。",
  "面對真相，勇敢接受內心的力量。",
  "今天適合釋懷過去，輕裝上路。",
  "相信重生的力量，今天是新的開始。"
],

  // 其他星座...
};
