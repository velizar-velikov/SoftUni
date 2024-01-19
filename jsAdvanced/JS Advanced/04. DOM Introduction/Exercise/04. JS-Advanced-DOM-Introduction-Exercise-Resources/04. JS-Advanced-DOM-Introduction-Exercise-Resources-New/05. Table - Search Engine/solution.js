function solve() {
   document.getElementById('searchBtn').addEventListener('click', onClick);
   const input = document.getElementById('searchField');
   const rowsToSearch = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of rowsToSearch) {
         row.className = '';
         let cellsInRow = row.children;
         for (let cell of cellsInRow) {
            if (cell.textContent.includes(input.value) && input.value.length !== 0) {
               row.className = 'select';
            }
         }
      }
      input.value = '';
   }
}