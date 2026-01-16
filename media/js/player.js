document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('test-audio');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const timeSpan = document.getElementById('time');

  if (playBtn && pauseBtn && audio) {
    playBtn.addEventListener('click', () => audio.play());
    pauseBtn.addEventListener('click', () => audio.pause());
    audio.addEventListener('timeupdate', () => {
      const s = String(Math.floor(audio.currentTime % 60)).padStart(2, '0');
      const m = Math.floor(audio.currentTime / 60);
      timeSpan.textContent = `${m}:${s}`;
    });
  }
});
