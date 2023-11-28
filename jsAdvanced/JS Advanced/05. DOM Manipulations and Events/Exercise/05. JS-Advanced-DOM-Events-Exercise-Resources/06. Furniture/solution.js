function solve() {

  let textArea = document.querySelector('h1 + textarea');

  let furnitureLists = textArea.value;

  let generateBtn = document.querySelector('button');
  let buyBtn = document.querySelectorAll('button')[1];

  function handleGenerate() {
    for (let furnitureList of furnitureLists) {
      
      let image = furnitureList['img'];
      let name = furnitureList['name'];
      let price = furnitureList['price'];
      let decFactor = furnitureList['decFactor'];
      createAddRow(image, name, price, decFactor);
    }
    textArea.value = '';
  }

  generateBtn.addEventListener('click', handleGenerate);
  buyBtn.addEventListener('click', handleBuy);

  function createAddRow(image, name, price, decFactor) {
    let row = document.createElement('tr');
  
    let cell1 = document.createElement('td');
    let img = document.createElement('img');
    img.src = image;
    cell1.appendChild(img);
  
    let cell2 = document.createComment('td');
    let p1 = document.createElement('p');
    p1.textContent = name;
    cell2.appendChild(p1);
  
    let cell3 = document.createElement('td');
    let p2 = document.createElement('p');
    p2.textContent = price;
    cell3.appendChild(p2);
  
    let cell4 = document.createElement('td');
    let p3 = document.createElement('p');
    p3.textContent = decFactor;
    cell4.appendChild(p3);
  
    let cell5 = document.createElement('td');
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = false;
    cell5.appendChild(check);
  
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    let tableBody = document.querySelector('table tbody');
    tableBody.appendChild(row);

  }


  function handleBuy() {
    let rows = document.querySelectorAll('tbody tr');

    let boughtFurniture = [];
    let totalPrice = 0;
    let decFactors = [];
    for (let row of rows) {
      let checkbox = row.querySelector('input');
      if (checkbox.checked == true) {
        let cells = row.querySelectorAll('td');
        let furniture = cells[1];
        let furnitureName = furniture.textContent;
        boughtFurniture.push(furnitureName);

        let price = cells[2].textContent;
        totalPrice += Number(price);

        let decFactor = cells[3].textContent;
        decFactors.push(decFactor);
      }
    }
    let avgDecFactor = decFactors
      .map(Number)
      .reduce((acc, value) => acc + value, 0) / decFactors.length;

      let outputTextarea = document.querySelectorAll('button')[1];

    outputTextarea.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    outputTextarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextarea.value += `Average decoration factor: ${avgDecFactor}`;
  }
}