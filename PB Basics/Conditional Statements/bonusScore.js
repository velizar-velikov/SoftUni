function bonusScore(input){
    let score = Number(input[0]);
    let bonus = 0;

    if(score <= 100){
        bonus = 5;
    } else if(score > 1000) {
        bonus = 0.10 * score;
    } else {
        bonus = 0.20 * score;

    }

    if(score % 2 == 0){
        bonus += 1;
    
    } else if(score % 10 == 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(score + bonus);
    
}
bonusScore(["2703"])