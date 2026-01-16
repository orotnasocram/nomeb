document.addEventListener('DOMContentLoaded', () => {
  const players = document.querySelectorAll('.audio-custom');

  players.forEach((container, idx) => {
    const audio = container.querySelector('audio');
    const playBtn = container.querySelector('.play');
    const pauseBtn = container.querySelector('.pause');
    const progress = container.querySelector('.progress');
    const timeSpan = container.querySelector('.time');

    if (!audio) return;

    // Ensure source is set (in case data-src used)
    const src = container.dataset.src;
    if (src && !audio.querySelector('source')) {
      const s = document.createElement('source');
      s.src = src;
      s.type = 'audio/mpeg';
      audio.appendChild(s);
    }

    // Play / Pause
    if (playBtn) playBtn.addEventListener('click', () => audio.play());
    if (pauseBtn) pauseBtn.addEventListener('click', () => audio.pause());

    // Update time and progress
    audio.addEventListener('timeupdate', () => {
      const s = String(Math.floor(audio.currentTime % 60)).padStart(2, '0');
      const m = Math.floor(audio.currentTime / 60);
      if (timeSpan) timeSpan.textContent = `${m}:${s}`;
      if (progress && audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
      }
    });

    // Seek via progress
    if (progress) {
      progress.addEventListener('input', (e) => {
        if (!audio.duration) return;
        const pct = Number(e.target.value);
        audio.currentTime = (pct / 100) * audio.duration;
      });
    }

    // Reset progress when ended
    audio.addEventListener('ended', () => {
      if (progress) progress.value = 0;
      if (timeSpan) timeSpan.textContent = '0:00';
    });
  });
});
