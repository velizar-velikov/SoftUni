function encodeAndDecodeMessages() {
    let textAreas = document.getElementsByTagName('textarea');
    let inputTextarea = textAreas[0];
    let outputTextarea = textAreas[1];

    let buttons = document.getElementsByTagName('button');
    let encodeBtn = buttons[0];
    let decodeBtn = buttons[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let encodedMessage = inputTextarea.value
            .split('')
            .map(char => char = String.fromCharCode(char.charCodeAt() + 1))
            .join('');
        outputTextarea.value = encodedMessage;
        inputTextarea.value = '';
    }

    function decode() {
        let encodedMessage = outputTextarea.value;
        let decodedMessage = encodedMessage
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt() - 1))
            .join('');
        outputTextarea.value = decodedMessage;
    }

}