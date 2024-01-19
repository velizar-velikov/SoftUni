function solve() {

  const input = document.getElementById('text');
  const currentCase = document.getElementById('naming-convention').value;
  let resultArr = input.value.split(' ').map(word => word.toLowerCase());

  if (currentCase == 'Camel Case') {
    resultArr = [resultArr[0], ...resultArr.slice(1).map(word => word[0].toUpperCase() + word.substring(1))];
  } else if (currentCase == 'Pascal Case') {
    resultArr = resultArr.map(word => word[0].toUpperCase() + word.substring(1));
  } else {
    resultArr = ['Error!'];
  };
  document.getElementById('result').textContent = resultArr.join('');
}