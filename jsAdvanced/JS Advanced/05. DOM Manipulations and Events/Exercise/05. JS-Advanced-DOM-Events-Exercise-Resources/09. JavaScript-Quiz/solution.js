function solve() {

  let correctAnswerCount = 0;
  const rightAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'
  ];

  const resultEl = document.querySelector('.results-inner h1');
  const questionsLists = document.getElementsByClassName('quiz-step');

  for (let i = 0; i < questionsLists.length; i++) {

    const questionsList = questionsLists[i];
    questionsList.addEventListener('click', checkAnswer);

    function checkAnswer(e) {

      if (e.target.tagName == 'P') {

        if (e.target.textContent == rightAnswers[i]) {
          correctAnswerCount++;
        }
        questionsList.parentElement.style.display = 'none';
        if (questionsLists[i + 1]) {
          questionsLists[i + 1].parentElement.style.display = 'block';
        } else {
          showResults();
        }
      }
    }
  }

  function showResults() {
    document.getElementById('results').style.display = 'block';
    if (correctAnswerCount == questionsLists.length) {
      resultEl.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      resultEl.textContent = `You have ${correctAnswerCount} right answers`;
    }
  }
}
