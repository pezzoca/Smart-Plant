// Estado Inicial
let xp = 20;
let level = 1;
let moisture = 18;
let isWatering = false;

// Elementos HTML / SVG
const plantSvg = document.getElementById('plantSvg');
const plantStatus = document.getElementById('plantStatus');
const moistureVal = document.getElementById('moistureVal');
const xpText = document.getElementById('xpText');
const xpBar = document.getElementById('xpBar');
const levelBadge = document.getElementById('levelBadge');

// Atualização da Interface e Ativação das Animações
function updateUI() {
  moistureVal.innerText = `${moisture}%`;

  if (isWatering) {
    plantSvg.className = 'watering';
    plantStatus.innerText = 'Regando a planta...';
    moistureVal.style.color = '#38bdf8';
  } else if (moisture < 30) {
    plantSvg.className = 'sad';
    plantStatus.innerText = 'Com sede! Precisa de água';
    moistureVal.style.color = '#f87171';
  } else {
    plantSvg.className = 'happy';
    plantStatus.innerText = 'Hidratada e feliz!';
    moistureVal.style.color = '#38bdf8';
  }

  xpText.innerText = `${xp} / 100`;
  xpBar.style.width = `${xp}%`;
  levelBadge.innerText = `Nível ${level}`;
}

// Ação de Regar
function waterPlant() {
  if (isWatering) return;
  
  isWatering = true;
  updateUI();

  setTimeout(() => {
    isWatering = false;
    moisture = 85;

    // Ganho de XP e evolução
    xp += 25;
    if (xp >= 100) {
      xp = 0;
      level += 1;
    }

    updateUI();
  }, 1800);
}

// Simulação Automática
setInterval(() => {
  if (!isWatering) {
    moisture -= 8;

    if (moisture <= 15) {
      waterPlant();
    } else {
      updateUI();
    }
  }
}, 2500);

// Primeira inicialização
updateUI();