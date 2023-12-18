document.addEventListener("DOMContentLoaded", function () {
  //connecting to a Web Audio API
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  function playNote(note) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      note.frequency,
      audioContext.currentTime
    );
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
  }
  //Mapping the keys to their corresponding audio frequency
  const notes = {
    C: 261.63,
    "C#": 277.18,
    D: 293.66,
    "D#": 311.13,
    E: 329.63,
    F: 349.23,
    "F#": 369.99,
    G: 392.0,
    "G#": 415.3,
    A: 440.0,
    "A#": 466.16,
    B: 493.88,
  };

  const keys = document.querySelectorAll(".key, .black-key");
  keys.forEach((key) => {
    const noteName = key.querySelector("span").innerText;
    const noteFrequency = notes[noteName];

    key.addEventListener("click", () => {
      playNote({ frequency: noteFrequency });

      key.classList.add("key-clicked");

      setTimeout(() => {
        key.classList.remove("key-clicked");
      }, 200);
    });
  });
});
