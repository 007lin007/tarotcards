const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);
const validCode = `LEO${year}${month}${day}`; // 自動生成今日代碼

const tarotCards = [
  { name: "愚者", image: "fool.jpg", description: "愚者象徵新的旅程、自由與無限可能。" },
  { name: "魔術師", image: "magician.jpg", description: "魔術師代表創造力與掌控現實的力量。" },
  { name: "女祭司", image: "high_priestess.jpg", description: "女祭司是潛意識、直覺與神秘智慧的守護者。" },
  { name: "皇后", image: "empress.jpg", description: "皇后帶來豐盛、愛與養育之能量。" },
  { name: "皇帝", image: "emperor.jpg", description: "皇帝代表穩定、結構與領導的力量。" },
  { name: "教皇", image: "hierophant.jpg", description: "教皇象徵傳統、精神指引與教育。" },
  { name: "戀人", image: "lovers.jpg", description: "戀人牌意味著關係中的選擇與真愛的契機。" },
  { name: "戰車", image: "chariot.jpg", description: "戰車代表意志力、勝利與成功的前進力量。" },
  { name: "力量", image: "strength.jpg", description: "力量象徵內在勇氣與自我掌控。" },
  { name: "隱士", image: "hermit.jpg", description: "隱士鼓勵深入內省，尋找內在的智慧。" },
  { name: "命運之輪", image: "wheel_of_fortune.jpg", description: "命運之輪預示生命週期中的轉變與機遇。" },
  { name: "正義", image: "justice.jpg", description: "正義牌代表公平、真理與因果律的平衡。" },
  { name: "吊人", image: "hanged_man.jpg", description: "吊人象徵犧牲、等待與不同視角的領悟。" },
  { name: "死亡", image: "death.jpg", description: "死亡牌代表結束，並預示新生的開始。" },
  { name: "節制", image: "temperance.jpg", description: "節制象徵和諧、平衡與療癒。" },
  { name: "惡魔", image: "devil.jpg", description: "惡魔提醒我們釋放束縛，尋求自由。" },
  { name: "塔", image: "tower.jpg", description: "塔牌代表突然的改變與覺醒的契機。" },
  { name: "星星", image: "star.jpg", description: "星星帶來希望、啟示與未來的指引。" },
  { name: "月亮", image: "moon.jpg", description: "月亮象徵直覺、潛意識與迷霧中的探索。" },
  { name: "太陽", image: "sun.jpg", description: "太陽代表成功、喜悅與生命力的圓滿展現。" },
  { name: "審判", image: "judgement.jpg", description: "審判預示重新甦醒與人生方向的確認。" },
  { name: "世界", image: "world.jpg", description: "世界牌象徵圓滿、成就與旅程的完成。" }
];

function drawCard() {
  const inputCode = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("cardResult");
  const cardContainer = document.getElementById("cardContainer");

  if (inputCode !== validCode) {
    resultDiv.innerText = "❌ 代碼錯誤，請確認您是會員並輸入正確代碼。";
    return;
  }

  const drawn = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  cardContainer.innerHTML = `<img src="cards/${drawn.image}" alt="${drawn.name}" class="tarot-card-image">`;

  resultDiv.innerHTML = `🃏 您抽到的是：<br><strong>${drawn.name}</strong><br>${drawn.description}`;
}
