function legendaryFarming(str) {
    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterials = {};
    let keyMaterialsTypes = ['shards', 'fragments', 'motes']

    let tokens = str.toLowerCase().split(' ');

    for (let i = 0; i < tokens.length; i += 2) {
        let qty = Number(tokens[i]);
        let material = tokens[i + 1];

        if (keyMaterialsTypes.includes(material)) {
            keyMaterials[material] += qty;
        } else {
            if (junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] += qty;
            } else {
                junkMaterials[material] = qty;
            }
        }

        if (keyMaterials[material] >= 250) {
            keyMaterials[material] -= 250;
            console.log(`${legendaries[material]} obtained!`);
            break;
        }
    }

    let sortedKeyMatEntries = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunkMatEntries = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    sortedKeyMatEntries.forEach(([material, qty]) => console.log(`${material}: ${qty}`));
    sortedJunkMatEntries.forEach(([material, qty]) => console.log(`${material}: ${qty}`));
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')