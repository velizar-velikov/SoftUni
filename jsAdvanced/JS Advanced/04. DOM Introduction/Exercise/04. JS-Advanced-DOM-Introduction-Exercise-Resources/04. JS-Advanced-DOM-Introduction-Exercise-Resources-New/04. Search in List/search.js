function search() {

   document.getElementById('result').textContent = '';

   let items = document.querySelectorAll('#towns li');
   let search = document.getElementById('searchText');
   let matches = 0;
   for (let item of items) {
      if (item.textContent.includes(search.value) && search.value.length != 0) {
         matches++;
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';
      } else {
         item.style.textDecoration = 'none';
         item.style.fontWeight = 'normal';
      }
   }
   if (search.value.length > 0) {
      document.getElementById('result').textContent = `${matches} matches found`
   }
}
