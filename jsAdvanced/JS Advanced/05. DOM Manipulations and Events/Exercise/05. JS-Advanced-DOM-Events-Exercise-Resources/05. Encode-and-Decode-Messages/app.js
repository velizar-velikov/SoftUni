function encodeAndDecodeMessages() {
    const textAreas = document.getElementsByTagName('textarea');
    const inputTextarea = textAreas[0];
    const outputTextarea = textAreas[1];

    const buttons = document.getElementsByTagName('button');
    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        const encodedMessage = inputTextarea.value
            .split('')
            .map(char => char = String.fromCharCode(char.charCodeAt() + 1))
            .join('');
        outputTextarea.value = encodedMessage;
        inputTextarea.value = '';
    }

    function decode() {
        const encodedMessage = outputTextarea.value;
        const decodedMessage = encodedMessage
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt() - 1))
            .join('');
        outputTextarea.value = decodedMessage;
    }
}