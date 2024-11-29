const options = ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'];

function createOptionsObj(typeVolcano) {
    const selectOptions = {};

    for (const option of options) {
        selectOptions[option] = { value: option };
        if (typeVolcano == option) {
            selectOptions[option].selected = true;
        } else {
            selectOptions[option].selected = false;
        }
    }
    return selectOptions;
}

module.exports = { createOptionsObj };
