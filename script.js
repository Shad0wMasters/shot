// Показываем кнопку через 5 секунд загрузки
setTimeout(() => {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'flex';
}, 5000);

// Скример и автоматическое исчезновение
document.getElementById('screamerButton').addEventListener('click', () => {
  const screamer = document.getElementById('screamer');
  const sound = document.getElementById('screamerSound');

  screamer.style.display = 'block';
  sound.volume = 1.0;
  sound.play();

  setTimeout(() => {
    screamer.style.display = 'none';
    sound.pause();
    sound.currentTime = 0;
  }, 15000); // 15 секунд
});
