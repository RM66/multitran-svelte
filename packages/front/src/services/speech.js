export function pronounce(text, lang) {
  if (!text || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  synth.speak(utter);
}

export function recognize(lang) {}
