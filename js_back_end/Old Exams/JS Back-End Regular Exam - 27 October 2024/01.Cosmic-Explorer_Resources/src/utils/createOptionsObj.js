const options = {
    type: ['Inner', 'Outer', 'Dwarf'],
    rings: ['Yes', 'No'],
};

function createOptionsObj(select, chosenOption) {
    const selectOptions = {};

    for (const option of options[select]) {
        selectOptions[option] = { value: option };
        if (chosenOption == option) {
            selectOptions[option].selected = true;
        } else {
            selectOptions[option].selected = false;
        }
    }
    return selectOptions;
}

module.exports = { createOptionsObj };
