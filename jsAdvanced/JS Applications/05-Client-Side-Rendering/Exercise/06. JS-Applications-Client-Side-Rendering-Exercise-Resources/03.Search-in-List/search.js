import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

document.querySelector('button').addEventListener('click', search);

const searchInput = document.getElementById('searchText');
const resultDiv = document.getElementById('result');

const townsTemplate = (towns) => html`
   <ul>
      ${towns.map(town => html`<li>${town}</li>`)}
   </ul>`;

render(townsTemplate(towns), document.getElementById('towns'));


function search() {
   let matchesCount = 0;
   resultDiv.textContent = '';

   document.querySelectorAll('#towns li').forEach(town => {

      town.classList.remove('active');

      if (town.textContent.includes(searchInput.value)) {
         town.classList.add('active');
         matchesCount++;
      }
   })
   resultDiv.textContent = `${matchesCount} matches found`;
}


