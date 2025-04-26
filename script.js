
const dailyCode = "LEO20250421"; // 今日有效代碼（可每日更新）
const tarotCards = [
    "愚者 - 冒險、自由",
    "魔術師 - 創造、行動",
    "女祭司 - 神秘、直覺",
    "皇后 - 豐盛、關懷",
    "皇帝 - 穩定、權威",
    "戀人 - 選擇、愛情",
    "戰車 - 勝利、前進",
    "力量 - 勇氣、自我掌控",
    "隱士 - 內省、智慧",
    "命運之輪 - 變化、機會"
];

function drawCard() {
    const inputCode = document.getElementById("codeInput").value;
    const resultDiv = document.getElementById("result");

    if (inputCode !== dailyCode) {
        resultDiv.innerText = "❌ 代碼錯誤，請確認您是今日有效會員。";
        return;
    }

    const today = new Date().toDateString();
    if (localStorage.getItem("lastDraw") === today) {
        resultDiv.innerText = "📅 您今天已經抽過牌了，請明天再來！";
        return;
    }

    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    resultDiv.innerText = `🃏 您今日的塔羅牌是：\n${card}`;
    localStorage.setItem("lastDraw", today);
}
