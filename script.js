// Estado Inicial
let xp = 20;
let level = 1;
let moisture = 18;
let isWatering = false;

// Elementos HTML
const plantFace = document.getElementById('plantFace');
const plantStatus = document.getElementById('plantStatus');
const moistureVal = document.getElementById('moistureVal');
const xpText = document.getElementById('xpText');
const xpBar = document.getElementById('xpBar');
const levelBadge = document.getElementById('levelBadge');

// Função de Atualização Geral da Interface
function updateUI() {
  moistureVal.innerText = `${moisture}%`;

  if (isWatering) {
    plantFace.innerText = '💧😊';
    plantStatus.innerText = 'Regando a planta...';
    moistureVal.style.color = '#38bdf8';
  } else if (moisture < 30) {
    plantFace.innerText = '😢';
    plantStatus.innerText = 'Com sede! Precisa de água';
    moistureVal.style.color = '#f87171';
  } else {
    plantFace.innerText = '😊';
    plantStatus.innerText = 'Hidratada e feliz!';
    moistureVal.style.color = '#38bdf8';
  }

  xpText.innerText = `${xp} / 100`;
  xpBar.style.width = `${xp}%`;
  levelBadge.innerText = `Nível ${level}`;
}

// Ação de Regar (Eleva umidade e ganha XP)
function waterPlant() {
  if (isWatering) return;
  
  isWatering = true;
  updateUI();

  setTimeout(() => {
    isWatering = false;
    moisture = 85; // Eleva a umidade

    // Concede XP e sobe de nível
    xp += 25;
    if (xp >= 100) {
      xp = 0;
      level += 1;
    }

    updateUI();
  }, 1800);
}

// SIMULAÇÃO AUTOMÁTICA EM LOOP (Reduz umidade e rega sozinho)
setInterval(() => {
  if (!isWatering) {
    moisture -= 8; // Reduz umidade gradativamente

    // Rega automaticamente quando a planta seca
    if (moisture <= 15) {
      waterPlant();
    } else {
      updateUI();
    }
  }
}, 2500);

// Primeira inicialização
updateUI();