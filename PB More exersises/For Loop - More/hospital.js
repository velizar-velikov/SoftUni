function hospital(input) {
    let period = Number(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let newPatients = 0;
    let allPatients = 0;

    for (let i = 1; i <= period; i++) {
        if ((i % 3 === 0) && (untreatedPatients > treatedPatients)) {
            doctors++;
        }
        newPatients = Number(input[i]);
        allPatients += newPatients;
        if (newPatients < doctors) {
            treatedPatients += newPatients;
        } else {
            treatedPatients += doctors;
        }
        untreatedPatients = allPatients - treatedPatients;
    }
    console.log();
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(["4", "7", "27", "9", "1"])