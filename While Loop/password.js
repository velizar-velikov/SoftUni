function password(input){
    let index = 0;
    let name = input[index];
    index++;
    let pass = input[index];
    index++;
    let enteredPass = input[index];
    index++;

    while (enteredPass !== pass){
        enteredPass = input[index];
        index++;
    }
    console.log("Welcome " + name + "!");
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])