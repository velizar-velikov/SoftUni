function trekkingMania(input) {
    let groups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let currentGroupMembers = Number(input[i]);
        if (currentGroupMembers <= 5) {
            musala += currentGroupMembers;
        } else if (currentGroupMembers <= 12) {
            monblan += currentGroupMembers;
        } else if (currentGroupMembers <= 25) {
            kilimanjaro += currentGroupMembers;
        } else if (currentGroupMembers <= 40) {
            k2 += currentGroupMembers;
        } else {
            everest += currentGroupMembers;
        }
    }
    let people = musala + monblan + kilimanjaro + k2 + everest;

    console.log((musala / people * 100).toFixed(2) + "%");
    console.log((monblan / people * 100).toFixed(2) + "%");
    console.log((kilimanjaro / people * 100).toFixed(2) + "%");
    console.log((k2 / people * 100).toFixed(2) + "%");
    console.log((everest / people * 100).toFixed(2) + "%");
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])