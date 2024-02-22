function loadRepos() {
   const host = 'https://api.github.com/users/testnakov/repos';

   const resultDiv = document.getElementById('res');

   const request = new XMLHttpRequest();
   request.addEventListener('readystatechange', onReadyStateChange);

   function onReadyStateChange() {
      if (request.readyState == 4 && request.status == 200) {
         resultDiv.textContent = request.responseText;
      }
   }
   request.open('GET', host);
   request.send();
}