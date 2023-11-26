let str = document.getElementById('text').value;
let modifier = document.getElementById('naming-convention').value;

function solve(str, modifier) {
  let result = '';
  str = str.toLowerCase();
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (modifier === 'Pascal Case') {
      result += word[0].toUpperCase() + word.slice(1)
    } else if (modifier === 'Camel Case') {
      if (i === 0) {
        result += word;
      } else {
        result += word[0].toUpperCase() + word.slice(1)
      }
    } else {
      result = 'Error!';
    }
  }
  document.getElementById('result').textContent = result;
}