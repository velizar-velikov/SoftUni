function solve() {
   let total = 0;
   let products = new Set();

   let textArea = document.querySelector('textarea');
   let addBtns = document.querySelectorAll('.add-product');
   let addBtnArr = Array.from(addBtns);

   addBtnArr.forEach(addBtn => addBtn.addEventListener('click', showText))

   let checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', printTotal);

   function showText(e) {
      let element = e.target;
      let productDiv = element.parentElement.parentElement;
      let titleDiv = productDiv.querySelector('.product-title');
      let priceDiv = productDiv.querySelector('.product-line-price');

      let product = titleDiv.textContent;
      let price = Number(priceDiv.textContent);

      total += price;
      products.add(product);

      textArea.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
   }

   function printTotal() {
      textArea.textContent += `You bought ${Array.from(products).join(', ')} for ${total.toFixed(2)}.`;
      addBtnArr.forEach(addBtn => addBtn.disabled = true);
      checkoutBtn.disabled = true;
   }
}