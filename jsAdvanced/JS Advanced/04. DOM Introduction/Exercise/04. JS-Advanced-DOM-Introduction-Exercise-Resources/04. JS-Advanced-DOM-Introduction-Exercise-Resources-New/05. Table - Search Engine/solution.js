function solve() {
   document.getElementById('searchBtn').addEventListener('click', onClick);
   const input = document.getElementById('searchField');
   const rowsToSearch = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of rowsToSearch) {
         let cellsInRow = row.querySelectorAll('td');
         row.className = '';
         for (let cell of cellsInRow) {
            if (cell.textContent.includes(input.value) && input.value.length !== 0) {
               row.className = 'select';
            }
         }
      }
      input.value = '';
   }
}