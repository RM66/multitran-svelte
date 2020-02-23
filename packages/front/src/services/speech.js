export function pronounce(text, lang) {
  if (!text || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  synth.speak(utter);
}

export const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export function recognize(lang) {
  if (!SpeechRecognition) return;
  const recognition = new SpeechRecognition();
  recognition.lang = lang;
  recognition.start();
  recognition.onresult = event => console.log(event);
  recognition.onspeechend = () => recognition.stop();
}
