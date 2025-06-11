const tarotCards = [
  {
    name: "The Fool",
    
    en: "New beginnings, freedom, adventure"
  },
  {
    name: "The Magician",
    
    en: "Resourcefulness, manifestation, power"
  },
  {
    name: "The High Priestess",
    
    en: "Intuition, subconscious, mystery"
  },
  {
    name: "The Empress",
   
    en: "Fertility, nurturing, abundance"
  },
  {
    name: "The Emperor",
    
    en: "Stability, structure, leadership"
  },
  {
    name: "The Hierophant",
    
    en: "Tradition, spirituality, guidance"
  },
  {
    name: "The Lovers",
  
    en: "Love, connection, choice"
  },
  {
    name: "The Chariot",
   
    en: "Victory, willpower, control"
  },
  {
    name: "Strength",
    
    en: "Inner strength, courage, patience"
  },
  {
    name: "The Hermit",
    
    en: "Introspection, solitude, wisdom"
  },
  {
    name: "Wheel of Fortune",
   
    en: "Cycles, change, destiny"
  },
  {
    name: "Justice",
    
    en: "Fairness, truth, law"
  },
  {
    name: "The Hanged Man",
    
    en: "Letting go, new perspective, sacrifice"
  },
  {
    name: "Death",
    
    en: "Transformation, endings, renewal"
  },
  {
    name: "Temperance",
   
    en: "Balance, harmony, patience"
  },
  {
    name: "The Devil",
   
    en: "Addiction, materialism, shadow self"
  },
  {
    name: "The Tower",
    
    en: "Upheaval, chaos, revelation"
  },
  {
    name: "The Star",
    
    en: "Hope, inspiration, serenity"
  },
  {
    name: "The Moon",
   
    en: "Illusion, intuition, confusion"
  },
  {
    name: "The Sun",
    
    en: "Joy, success, positivity"
  },
  {
    name: "Judgement",
    
    en: "Reflection, reckoning, rebirth"
  },
  {
    name: "The World",
    
    en: "Completion, unity, accomplishment"
  },
];

function drawCard() {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  const result = document.getElementById("result");
  result.innerHTML = `
    <h2>${card.name}</h2>
    
    <p><strong>English:</strong> ${card.en}</p>
  `;
}
