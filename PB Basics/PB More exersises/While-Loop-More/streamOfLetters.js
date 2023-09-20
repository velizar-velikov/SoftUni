function streamOfLetters(input){
    let index = 0;
    let command = input[index];
    let buff = "";

    while (command !== "End"){
        if (command >= "a" && command <= "z"){
            index++;
            command = input[index];
            buff += String(command);
        }

    }
    console.log(buff);
    //Тази задача не мога да я реша!
}
streamOfLetters(["w", "%", "/", "f", "End"])