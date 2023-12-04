document.addEventListener('DOMContentLoaded', function () {
  const chordProgressionElement = document.getElementById('chordProgression');
  const generateButton = document.getElementById('generateButton');
  const toggleModeButton = document.getElementById('toggleModeButton');
  const keySelect = document.getElementById('keySelect');


  let isDarkMode = false;

  const chords = {
  C: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
  G: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'],
  D: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
  A: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
  E: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
  B: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
  Fsharp: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'],
  Csharp: ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'],
  F: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'],
  Bb: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'],
  Eb: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'],
  Ab: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'],
  Db: ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cdim'],
  Gb: ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fdim'],
  Cb: ['Cb', 'Dbm', 'Ebm', 'Fb', 'Gb', 'Abm', 'Bbdim'],
  Am: ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'],
  Em: ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'],
  Cm: ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
  Gm: ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
  Dm: ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'],
  Bm: ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'],
  FsharpM: ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'],
  CsharpM: ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'],
  Fm: ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'],
  Bbm: ['Bbm', 'Cdim', 'Db', 'Ebm', 'Fm', 'Gb', 'Ab'],
  Ebm: ['Ebm', 'Fdim', 'Gb', 'Abm', 'Bbm', 'Cb', 'Db'],
  Abm: ['Abm', 'Bbdim', 'Cb', 'Dbm', 'Ebm', 'Fb', 'Gb'],
  Dbm: ['Dbm', 'Ebdim', 'Fb', 'Gbm', 'Abm', 'Bbb', 'Cb'],
  Gbm: ['Gbm', 'Abdim', 'Bbb', 'Cbm', 'Dbm', 'Ebb', 'Fb'],
  Cbm: ['Cbm', 'Dbdim', 'Ebb', 'Fbm', 'Gbm', 'Abb', 'Bbb'],
  };

  function generateChordProgression() {
    const selectedKey = keySelect.value;

    if (selectedKey === 'random') {
      const randomKey = getRandomKey();
      const firstChord = getRandomChord(randomKey);
      const progression = [firstChord];

      for (let i = 1; i < 4; i++) {
        progression.push(getRandomChord(randomKey));
      }

      const randomChordProgression = progression.join(' - ');
      chordProgressionElement.textContent = randomChordProgression;
    } else {
      const firstChord = getRandomChord(selectedKey);
      const progression = [firstChord];

      for (let i = 1; i < 4; i++) {
        progression.push(getRandomChord(selectedKey));
      }

      const chordProgression = progression.join(' - ');
      chordProgressionElement.textContent = chordProgression;
    }
  }

  function getRandomKey() {
    const keys = Object.keys(chords);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  }

  function getRandomChord(key) {
    const chordArray = chords[key];
    const randomIndex = Math.floor(Math.random() * chordArray.length);
    return chordArray[randomIndex];
  }
  function toggleMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  }

  generateButton.addEventListener('click', generateChordProgression);
  toggleModeButton.addEventListener('click', toggleMode);
  keySelect.addEventListener('change', generateChordProgression);
});




