const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);
const validCode = `LEO${year}${month}${day}`; // 自動生成今日代碼

// 塔羅牌故事 (文字版)
const tarotCards = [
  { name: "愚者", description: "愚者象徵新的旅程、自由與無限可能。" },
  { name: "魔術師", description: "魔術師代表創造力與掌控現實的力量。" },
  { name: "女祭司", description: "女祭司是潛意識、直覺與神秘智慧的守護者。" },
  { name: "皇后", description: "皇后帶來豐盛、愛與養育之能量。" },
  { name: "皇帝", description: "皇帝代表穩定、結構與領導的力量。" },
  { name: "教皇", description: "教皇象徵傳統、精神指引與教育。" },
  { name: "戀人", description: "戀人牌意味著關係中的選擇與真愛的契機。" },
  { name: "戰車", description: "戰車代表意志力、勝利與成功的前進力量。" },
  { name: "力量", description: "力量象徵內在勇氣與自我掌控。" },
  { name: "隱士", description: "隱士鼓勵深入內省，尋找內在的智慧。" },
  { name: "命運之輪", description: "命運之輪預示生命週期中的轉變與機遇。" },
  { name: "正義", description: "正義牌代表公平、真理與因果律的平衡。" },
  { name: "吊人", description: "吊人象徵犧牲、等待與不同視角的領悟。" },
  { name: "死亡", description: "死亡牌代表結束，並預示新生的開始。" },
  { name: "節制", description: "節制象徵和諧、平衡與療癒。" },
  { name: "惡魔", description: "惡魔提醒我們釋放束縛，尋求自由。" },
  { name: "塔", description: "塔牌代表突然的改變與覺醒的契機。" },
  { name: "星星", description: "星星帶來希望、啟示與未來的指引。" },
  { name: "月亮", description: "月亮象徵直覺、潛意識與迷霧中的探索。" },
  { name: "太陽", description: "太陽代表成功、喜悅與生命力的圓滿展現。" },
  { name: "審判", description: "審判預示重新甦醒與人生方向的確認。" },
  { name: "世界", description: "世界牌象徵圓滿、成就與旅程的完成。" }
];

// 中文星座對英文對照表
const zodiacMap = {
  "牡羊座": "aries",
  "金牛座": "taurus",
  "雙子座": "gemini",
  "巨蟹座": "cancer",
  "獅子座": "leo",
  "處女座": "virgo",
  "天秤座": "libra",
  "天蠍座": "scorpio",
  "射手座": "sagittarius",
  "魔羯座": "capricorn",
  "水瓶座": "aquarius",
  "雙魚座": "pisces"
};

function drawCard() {
  const inputCode = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("cardResult");
  const cardContainer = document.getElementById("cardContainer");
  const zodiacSection = document.getElementById("zodiacSection");

  if (inputCode !== validCode) {
    resultDiv.innerText = "❌ 代碼錯誤，請確認您是會員並輸入正確代碼。";
    return;
  }

  const drawn = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  cardContainer.innerHTML = ""; // 不顯示圖片

  resultDiv.innerHTML = `
    🃏 您抽到的是：<br>
    <strong>${drawn.name}</strong><br>
    ${drawn.description}
  `;

  zodiacSection.style.display = "block"; // 顯示星座輸入區
}

// 使用 CORS Anywhere 中繼代理，解決跨域問題
async function fetchZodiacFortune() {
  const zodiacInput = document.getElementById("zodiacInput").value.trim();
  const zodiacResult = document.getElementById("zodiacResult");

  if (!zodiacMap[zodiacInput]) {
    zodiacResult.innerHTML = "❌ 請輸入正確的中文星座，例如：獅子座";
    return;
  }

  const zodiacEng = zodiacMap[zodiacInput];

  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://aztro.sameerkumar.website/?sign=${zodiacEng}&day=today`, {
      method: 'POST',
      headers: {
        'Origin': 'https://your-site.pages.dev' // 可選，可留空
      }
    });
    const data = await response.json();

    zodiacResult.innerHTML = `
      🔮 <strong>${zodiacInput} - 今日運勢</strong><br><br>
      ✨ 整體運勢：${data.description}<br>
      💖 愛情運勢時段：${data.lucky_time}<br>
      💰 財運最佳搭配：${data.compatibility}<br>
      🧘 健康情緒建議：${data.mood}<br>
      🎨 幸運色：${data.color}<br>
      🔢 幸運數字：${data.lucky_number}
    `;
  } catch (error) {
    console.error(error);
    zodiacResult.innerHTML = "⚡️ 抱歉，連接星座運勢伺服器失敗，請稍後再試！";
  }
}
