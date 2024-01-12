function evenPosition(arr) {
    console.log(arr.filter((el, i) => i % 2 == 0)
        .join(' '));
}

evenPosition(['20', '30', '40', '50', '60'])