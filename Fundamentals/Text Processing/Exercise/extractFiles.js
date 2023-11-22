function extractFiles(input) {
    let items = input.split('\\');
    let fileAndExtension = input.substring(input.lastIndexOf('\\') + 1, input.length);
    let fileName = fileAndExtension.substring(0, fileAndExtension.lastIndexOf('.'));
    let extension = fileAndExtension.substring(fileAndExtension.lastIndexOf('.') + 1, fileAndExtension.length);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFiles('C:\\Internal\\training-internal\\Template.pptx')

extractFiles('C:\\Projects\\Data-Structures\\LinkedList.cs')