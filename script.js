const block = document.querySelector('.block');

const heartPositions = [
  [0, 4],[1,2],[1,6],[2,1],[2,3],[2,5],[2,7],
  [3,0],[3,2],[3,4],[3,6],[3,8],
  [4,1],[4,3],[4,5],[4,7],
  [5,2],[5,6],
  [6,4]
];

heartPositions.forEach((pos, index) => {
  const heart = document.createElement('heart');
  heart.style.left = `${pos[1] * 30}px`;
  heart.style.top = `${pos[0] * 30}px`;
  block.appendChild(heart);

  setTimeout(() => {
    heart.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    heart.style.opacity = 1;
    heart.style.transform = 'scale(1.2)';
    setTimeout(() => {
      heart.style.transform = 'scale(1)';
    }, 300);
  }, index * 150);
});
