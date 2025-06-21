const botao = document.getElementById('botao');
const player = document.getElementById('player');

botao.addEventListener('click', () => {
  botao.style.display = 'none';
  player.classList.remove('oculto');
});
