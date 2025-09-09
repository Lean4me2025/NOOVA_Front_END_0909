(() => {
  const sNova = document.getElementById('screen-nova');
  const sNavi = document.getElementById('screen-navi');
  const aNova = document.getElementById('audio-nova');
  const aNavi = document.getElementById('audio-navi');

  function show(el) {
    [sNova, sNavi].forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    // Scroll to top to avoid mobile oddities
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  function safePlay(audio) {
    [aNova, aNavi].forEach(a => { if (a !== audio) { a.pause(); try { a.currentTime = 0; } catch {} } });
    audio.play().catch(() => {
      // If user gesture required, do nothing (hint on page already covers it)
    });
  }

  document.getElementById('btn-nova-play').addEventListener('click', () => safePlay(aNova));
  document.getElementById('btn-nova-stop').addEventListener('click', () => { aNova.pause(); try { aNova.currentTime = 0; } catch {} });
  document.getElementById('btn-begin').addEventListener('click', () => { aNova.pause(); show(sNavi); });

  document.getElementById('btn-navi-play').addEventListener('click', () => safePlay(aNavi));
  document.getElementById('btn-navi-stop').addEventListener('click', () => { aNavi.pause(); try { aNavi.currentTime = 0; } catch {} });
  document.getElementById('btn-continue').addEventListener('click', () => {
    aNavi.pause();
    // Hook to your next page (traits)
    window.location.href = './traits.html';
  });
})();