function create(words) {
   words.forEach(word => {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', showPara);
      let result = document.getElementById('content');
      result.appendChild(div);
      function showPara(e) {
         e.target.children[0].style.display = 'block';
      }
   })
}