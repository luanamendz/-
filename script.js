// Função para desenhar os bonecos
function desenharBoneco(svg, cacheado = false, ajoelhado = false, cabeloLongo = false) {
  svg.innerHTML = `
    <circle cx="100" cy="50" r="20" stroke="black" stroke-width="3" fill="none"/>
    ${cacheado ? gerarCacheado() : ""}
    ${cabeloLongo ? gerarCabeloLongo() : ""}
    <line x1="100" y1="70" x2="100" y2="130" stroke="black" stroke-width="3"/>
    <line x1="100" y1="80" x2="60" y2="100" stroke="black" stroke-width="3"/>
    <line x1="100" y1="80" x2="150" y2="60" stroke="black" stroke-width="3"/>
    ${
      ajoelhado
        ? `
      <line x1="100" y1="130" x2="90" y2="150" stroke="black" stroke-width="3"/>
      <line x1="100" y1="130" x2="110" y2="150" stroke="black" stroke-width="3"/>
      <rect x="95" y="70" width="10" height="10" rx="5" ry="5" fill="red"/>
      <rect x="105" y="70" width="10" height="10" rx="5" ry="5" fill="yellow"/>
    `
        : `
      <line x1="100" y1="130" x2="70" y2="170" stroke="black" stroke-width="3"/>
      <line x1="100" y1="130" x2="130" y2="170" stroke="black" stroke-width="3"/>
    `
    }
    <circle cx="93" cy="45" r="2" fill="black"/>
    <circle cx="107" cy="45" r="2" fill="black"/>
    <path d="M95 55 Q100 60 105 55" stroke="black" fill="none" stroke-width="2"/>
  `;
}

function gerarCacheado() {
  const pos = [
    [85, 35],
    [95, 30],
    [105, 30],
    [115, 35],
    [120, 45],
    [115, 55],
    [105, 65],
    [95, 65],
    [85, 55],
    [80, 45],
  ];
  return pos
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="black"/>`)
    .join('');
}

function gerarCabeloLongo() {
  return `
    <line x1="90" y1="30" x2="90" y2="70" stroke="black" stroke-width="3"/>
    <line x1="100" y1="30" x2="100" y2="70" stroke="black" stroke-width="3"/>
    <line x1="110" y1="30" x2="110" y2="70" stroke="black" stroke-width="3"/>
  `;
}

// Começa o desenho do boneco cacheado
const bonecoCacheado = document.getElementById('boneco-cacheado');
desenharBoneco(bonecoCacheado, true);

// Posicionamento dos corações para formar "Gabriela"
const nomeGabriela = document.querySelector('.nome-gabriela');
const posicoesGabriela = [
  // G
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
  [3, 0],
  [3, 1],
  [3, 2],
  [2, 2],
  [1, 2],
  // A
  [0, 4],
  [1, 3],
  [1, 5],
  [2, 3],
  [2, 4],
  [2, 5],
  [3, 3],
  [3, 5],
  [4, 3],
  [4, 5],
  // B
  [0, 7],
  [1, 7],
  [2, 7],
  [3, 7],
  [4, 7],
  [0, 8],
  [2, 8],
  [4, 8],
  [1, 9],
  [3, 9],
  // R
  [0, 11],
  [1, 11],
  [2, 11],
  [3, 11],
  [4, 11],
  [0, 12],
  [2, 12],
  [1, 13],
  [3, 13],
  [4, 13],
  // I
  [0, 15],
  [1, 15],
  [2, 15],
  [3, 15],
  [4, 15],
  // E
  [0, 17],
  [1, 17],
  [2, 17],
  [3, 17],
  [4, 17],
  [0, 18],
  [2, 18],
  [4, 18],
  // L
  [0, 20],
  [1, 20],
  [2, 20],
  [3, 20],
  [4, 20],
  [4, 21],
  // A
  [0, 23],
  [1, 22],
  [1, 24],
  [2, 22],
  [2, 23],
  [2, 24],
  [3, 22],
  [3, 24],
  [4, 22],
  [4, 24],
];

// Função para animar os corações
posicoesGabriela.forEach((pos, index) => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${pos[1] * 20}px`;
  heart.style.top = `${pos[0] * 40}px`;
  heart.style.opacity = 0;
  nomeGabriela.appendChild(heart);

  setTimeout(() => {
    heart.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    heart.style.opacity = 1;
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
      heart.style.transform = 'scale(1)';
    }, 300);
  }, index * 100);
});

// Mostrar pedido depois que a animação dos corações termina
setTimeout(() => {
  const pedido = document.querySelector('.pedido');
  pedido.style.display = 'flex';

  const ajoelhado = document.getElementById('ajoelhado');
  desenharBoneco(ajoelhado, true, true); // cacheado + ajoelhado

  const cabeloLongo = document.getElementById('cabelo-longo');
  desenharBoneco(cabeloLongo, false, false, true); // cabelo longo

  setTimeout(() => {
    document.querySelector('.caixa-texto').classList.add('aparecer');
  }, 2000);
}, posicoesGabriela.length * 100 + 1000);
