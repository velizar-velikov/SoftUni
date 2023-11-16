function calcIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$|.]*<(?<product>\w+)>[^|$|.]*\|(?<count>\d+)\|[^|$|.0-9]*(?<price>\d+\.?\d*)\$/g;

    let totalMoney = 0;
    let match = [...(input.join(' ')).matchAll(pattern)];

    match.forEach(match => {
        let money = Number(match.groups.price) * Number(match.groups.count);
        totalMoney += money;
        console.log(`${match.groups.name}: ${match.groups.product} - ${money.toFixed(2)}`);
    })

        // let money = (match.groups.price * match.groups.count);
        // totalMoney += money;
        // console.log(`${match.groups.name}: ${match.groups.product} - ${money.toFixed(2)}`);

    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}
calcIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

calcIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])