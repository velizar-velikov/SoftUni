function solve() {
  let textArea = document.getElementById('input');
  let sentences = textArea.value.toString().split('.')
    .filter(sentence => sentence.length > 0);
  let sentenceCounter = 0;
  let para = '<p>';
  let output = document.getElementById('output');
  output.innerHTML = '';
  for (let sentence of sentences) {
    sentenceCounter++;
    para += sentence + '.';
    if (sentenceCounter % 3 == 0) {
      para += '</p>';
      output.innerHTML += para;
      para = '<p>';
    }
  }
  if (sentenceCounter % 3 != 0) {
    para += '</p>';
    output.innerHTML += para;
    textArea.value = '';
  }
}