function solve(input) {
    let pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/g;

    input = input.join(' ');
    let match = pattern.exec(input);

    let allFurniture = [];
    let totalCost = 0;

    while (match !== null) {
        let { furniture, price, qty } = match.groups;
        allFurniture.push(furniture);
        totalCost += Number(price) * Number(qty);
        match = pattern.exec(input);
    }

    console.log('Bought furniture:');
    allFurniture.forEach(furniture => console.log(furniture));
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
// solve(['>>Sofa<<312.23!3',
// '>>TV<<300!5',
// '>Invalid<<!5',
// 'Purchase'])

solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])