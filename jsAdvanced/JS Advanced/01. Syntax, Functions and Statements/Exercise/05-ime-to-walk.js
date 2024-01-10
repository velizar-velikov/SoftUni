function timeToWalk(steps, footprint, speed) {

    const distance = steps * footprint / 1000;
    const rest = Math.floor(distance * 1000 / 500) / 60;
    const time = distance / speed + rest;

    let hours = Math.floor(time);
    let mins = Math.floor((time * 60) % 60);
    let secs = Math.round(((time * 60) % 60 * 60) % 60);

    if (hours.toString().length == 1) hours = `0${hours}`;
    if (mins.toString().length == 1) mins = `0${mins}`;
    if (secs.toString().length == 1) secs = `0${secs}`;

    console.log(`${hours}:${mins}:${secs}`);
}

timeToWalk(2564, 0.70, 5.5)