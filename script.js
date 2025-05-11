const tarotCards = [
  {
    name: "The Fool",
    zh: "愚者｜新的開始，自由，冒險",
    en: "New beginnings, freedom, adventure"
  },
  {
    name: "The Magician",
    zh: "魔術師｜掌握資源，實現願望",
    en: "Resourcefulness, manifestation, power"
  },
  {
    name: "The High Priestess",
    zh: "女祭司｜直覺，潛意識，神祕",
    en: "Intuition, subconscious, mystery"
  },
  {
    name: "The Empress",
    zh: "皇后｜豐饒，母性，自然",
    en: "Fertility, nurturing, abundance"
  },
  {
    name: "The Emperor",
    zh: "皇帝｜穩定，結構，領導",
    en: "Stability, structure, leadership"
  },
  {
    name: "The Hierophant",
    zh: "教皇｜傳統，信仰，導師",
    en: "Tradition, spirituality, guidance"
  },
  {
    name: "The Lovers",
    zh: "戀人｜關係，選擇，愛",
    en: "Love, connection, choice"
  },
  {
    name: "The Chariot",
    zh: "戰車｜勝利，意志力，掌控",
    en: "Victory, willpower, control"
  },
  {
    name: "Strength",
    zh: "力量｜內在力量，勇氣，耐心",
    en: "Inner strength, courage, patience"
  },
  {
    name: "The Hermit",
    zh: "隱士｜尋找真理，內省，孤獨",
    en: "Introspection, solitude, wisdom"
  },
  {
    name: "Wheel of Fortune",
    zh: "命運之輪｜命運轉變，週期，機會",
    en: "Cycles, change, destiny"
  },
  {
    name: "Justice",
    zh: "正義｜公平，因果，平衡",
    en: "Fairness, truth, law"
  },
  {
    name: "The Hanged Man",
    zh: "倒吊人｜暫停，轉變觀點，放下",
    en: "Letting go, new perspective, sacrifice"
  },
  {
    name: "Death",
    zh: "死神｜結束，重生，蛻變",
    en: "Transformation, endings, renewal"
  },
  {
    name: "Temperance",
    zh: "節制｜平衡，融合，調和",
    en: "Balance, harmony, patience"
  },
  {
    name: "The Devil",
    zh: "惡魔｜束縛，慾望，誘惑",
    en: "Addiction, materialism, shadow self"
  },
  {
    name: "The Tower",
    zh: "高塔｜突發改變，覺醒，崩壞",
    en: "Upheaval, chaos, revelation"
  },
  {
    name: "The Star",
    zh: "星星｜希望，靈感，療癒",
    en: "Hope, inspiration, serenity"
  },
  {
    name: "The Moon",
    zh: "月亮｜迷惘，潛意識，幻象",
    en: "Illusion, intuition, confusion"
  },
  {
    name: "The Sun",
    zh: "太陽｜快樂，成功，光明",
    en: "Joy, success, positivity"
  },
  {
    name: "Judgement",
    zh: "審判｜反省，清醒，重生",
    en: "Reflection, reckoning, rebirth"
  },
  {
    name: "The World",
    zh: "世界｜完成，整合，自由",
    en: "Completion, unity, accomplishment"
  },
];

function drawCard() {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  const result = document.getElementById("result");
  result.innerHTML = `
    <h2>${card.name}</h2>
    <p><strong>中文：</strong>${card.zh}</p>
    <p><strong>English:</strong> ${card.en}</p>
  `;
}
