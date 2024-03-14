document.addEventListener('DOMContentLoaded', () => { //Event listener for when DOM is loaded 
 
  let keys; 
  // Fetch 
  fetch('http://localhost:3000/keys')
    .then(response => response.json())
    .then(data => {
      keys = data; // Store the data in the keys variable
    


      // Populate the Music Key Selector
      const musicKeySelector = document.getElementById('musicKeySelector');
      keys.forEach(key => { // Loop through the keys array
        const option = document.createElement('option'); // Create an <option> element
        option.value = key.Tonic; //Gets the values  
        option.textContent = key.Tonic; //Allows selection of key from dropdown
        musicKeySelector.appendChild(option); // Append the <option> element to the <select> element
      });

      // Event 1: Generate Chord Progression button
      const generateChordsButton = document.getElementById('generateChordsButton');
      generateChordsButton.addEventListener('click', generateChordProgressionCallback);

      // Event 2: Toggle Dark Mode button
      const toggleDarkModeButton = document.getElementById('toggleDarkModeButton');
      toggleDarkModeButton.addEventListener('click', toggleDarkModeCallback);

      // Event 3: Music Key Selector List
      musicKeySelector.addEventListener('change', musicKeySelectorCallback);

    });



  // Unique Callback for Generate Chord Progression button
  function generateChordProgressionCallback() {
    console.log('Generate Chord Progression button clicked!');
    
    const selectedKey = document.getElementById('musicKeySelector').value; 
    
    const keyData = keys.find(key => key.Tonic === selectedKey);
  
    if (keyData) {
      const randomChordProgression = generateChordProgression(keyData);
      console.log('Random Chord Progression:', randomChordProgression);
  
      const chordProgressionDiv = document.getElementById('chordProgression');
      chordProgressionDiv.textContent = randomChordProgression.join(' - ');
    } else {
      console.error('Key data not found for selected key:', selectedKey);
    }
  }
  
});

  // Unique Callback for Toggle Dark Mode button
  function toggleDarkModeCallback() {
    const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');
    console.log('Dark Mode Toggled!');
  }

  // Unique Callback for Music Key Selector List
  function musicKeySelectorCallback() {
    const selectedKey = document.getElementById('musicKeySelector').value;
    console.log(`Selected Music Key: ${selectedKey}`);
  }

// Function to generate a random chord progression
function generateChordProgression(keyData) {
  const chords = keyData.Key;
  const randomChords = [];

  // Log the chords array to the console
  console.log('Chords Array:', chords);

  // Generate 4 random indices
  const randomIndices = getRandomIndices(chords.length, 4);
  console.log('Random Indices:', randomIndices);

  // Use the random indices to pick 4 random chords from the key
  randomIndices.forEach(index => {
    randomChords.push(chords[index]); // Push the chord at the current index to the randomChords array
  });

  console.log('Random Chords:', randomChords);

  return randomChords;
}
// Function to get an array of random indices
function getRandomIndices(max, count) {
  const indices = [];
  while (indices.length < count) { // Loop until we have the required number of indices
    const randomIndex = Math.floor(Math.random() * max);
    if (!indices.includes(randomIndex)) { // Only add the index if it's not already in the array 
      indices.push(randomIndex);
    }
  }
  return indices;
}


