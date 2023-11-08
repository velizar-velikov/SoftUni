function cutAndReverse(str) {
    let firstPart = str.substring(0, Math.floor(str.length / 2));
    let secondPart = str.split(firstPart).join('');
    console.log(firstPart.split('').reverse().join(''));
    console.log(secondPart.split('').reverse().join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')