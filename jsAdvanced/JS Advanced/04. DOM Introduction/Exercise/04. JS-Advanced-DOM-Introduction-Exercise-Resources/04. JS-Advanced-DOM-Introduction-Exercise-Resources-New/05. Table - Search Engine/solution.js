function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField');
      let rowsToSearch = document.querySelectorAll('table tbody tr');
      for (let i = 0; i < rowsToSearch.length; i++) {
         let row = rowsToSearch[i];
         row.classList = '';
         let cellsInRow = row.children;
         for (let cell of cellsInRow) {
            if (cell.textContent.includes(input.value) && input.value.length !== 0) {
               row.classList.add('select');
            }
         }
      }
      input.value = '';
   }
}