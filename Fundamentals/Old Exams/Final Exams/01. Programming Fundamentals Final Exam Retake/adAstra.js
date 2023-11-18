function adAstra([input]) {
    let pattern = /(?<divider>[#|])(?<item>[A-Za-z]+\s?[A-Za-z]*)\k<divider>(?<date>\d{2}\/\d{2}\/\d{2})\k<divider>(?<cals>\d{1,5})\k<divider>/g;

    let matches = [...input.matchAll(pattern)];

    let totalCals = 0;
    matches.forEach(match => totalCals += Number(match.groups.cals));
    console.log(`You have food to last you for: ${Math.floor(totalCals / 2000)} days!`);
    matches.forEach(match => console.log(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.cals}`))
}
// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])