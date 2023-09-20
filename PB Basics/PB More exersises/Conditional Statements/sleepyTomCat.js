function sleepyTomCat(input){
    let restDays = Number(input[0]);

    let playTime = (365 - restDays) * 63 + restDays * 127;

    if(playTime > 30000){
      let hoursMore = Math.floor((playTime - 30000) / 60);
      let minutesMore = (playTime - 30000) % 60;

      console.log('Tom will run away');
      console.log(`${hoursMore} hours and ${minutesMore} minutes more for play`);

    }else{
        let hoursLess = Math.floor((30000 - playTime) / 60);
        let minutesLess = (30000 - playTime) % 60;

        console.log('Tom sleeps well');
        console.log(`${hoursLess} hours and ${minutesLess} minutes less for play`);
    }
}
sleepyTomCat(["20"])