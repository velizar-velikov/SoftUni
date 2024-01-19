//unsuccessfull solution

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const bestRestaurantEl = document.querySelector('#bestRestaurant span');
      const bestRestaurantWokersEl = document.querySelector('#workers span');

      const textArea = document.querySelector('textarea');
      const input = textArea.value.substring(2, textArea.value.length - 2).split('[, \n]+]');
      console.log(input);

      const restaurants = {};

      input.forEach(info => {
         let [restaurant, workersInfoStr] = info.split('-');
         if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = {
               workers: {},
               avgSalary: 0,
               bestSalary: 0
            };
         }
         let workersInfo = workersInfoStr.split(', ');
         workersInfo.forEach(workerInfo => {
            let [name, salary] = workerInfo.split(' ');
            salary = Number(salary);

            restaurants[restaurant].workers[name] = salary;
            if (restaurants[restaurant].avgSalary == 0 && restaurants[restaurant].bestSalary == 0) {
               restaurants[restaurant].avgSalary = salary;
               restaurants[restaurant].bestSalary = salary;
            } else {
               restaurants[restaurant].avgSalary = (restaurants[restaurant].avgSalary *
                  (Object.keys(restaurants[restaurant].workers).length - 1) + salary) /
                  Object.keys(restaurants[restaurant].workers).length;

               bestSalary = salary > bestSalary ? salary : bestSalary;
            }
         })

         const bestSalaryRestaurantEntry = Object.entries(restaurants).sort((a, b) => b.avgSalary - a.avgSalary)[0];

         bestRestaurantEl.textContent = `Name: ${bestSalaryRestaurantEntry[0]} Average Salary: ${bestSalaryRestaurantEntry[1].avgSalary} Best Salary: ${bestSalaryRestaurantEntry[1].bestSalary}`;

         const workersInBestRestaurant = bestSalaryRestaurantEntry[1].workers;

         let workersOutput = [];
         Object.entries(workersInBestRestaurant).sort((a, b) => b[1] - a[1]).forEach(([name, salary]) => {
            workersOutput.push(`Name: ${name} With Salary: ${salary}`);
         });
         bestRestaurantWokersEl.textContent = workersOutput.join(' ');
      })

      textArea.value = '';
   }
}