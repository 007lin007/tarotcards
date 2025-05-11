const cards = [
  '愚者', '魔術師', '女祭司', '皇后', '皇帝',
  '教皇', '戀人', '戰車', '力量', '隱者',
  '命運之輪', '正義', '吊人', '死神', '節制',
  '惡魔', '高塔', '星星', '月亮', '太陽',
  '審判', '世界'
];

const cardContainer = document.getElementById('card-container');
const drawButton = document.getElementById('draw-button');

drawButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  cardContainer.textContent = card;
});
