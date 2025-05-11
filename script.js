function generateCover() {
  const file = document.getElementById('audioUpload').files[0];
  const voice = document.getElementById('voiceSelect').value;

  if (!file) {
    alert('Silakan upload file lagu terlebih dahulu!');
    return;
  }

  // Simulasi proses generate
  alert('Sedang proses generate AI cover... (simulasi)');

  // Tampilkan hasil simulasi
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultAudio').src = 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3';
  document.getElementById('downloadLink').href = 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3';
}