function test(name, age) {
    let obj = {
    name,
    age
    }
   for (let arrOfProperties of Object.entries(obj)) {
    console.log(arrOfProperties)
   }
   console.log(Object.entries(obj));
}
test('Velizar', 23);
