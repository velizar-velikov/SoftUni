const myStr = 'pesho';
const myPromise1 = new Promise((resolve, reject) => {
    if (myStr.startsWith('p')) {
        setTimeout(x => resolve('one'), 2000);
    } else {
        setTimeout(x => reject('one error'), 2000);
    }
})
const myPromise2 = new Promise((resolve, reject) => {
    if (myStr.startsWith('p')) {
        setTimeout(x => resolve('two'), 1000);
    } else {
        setTimeout(x => reject('two error'), 1000);
    }
})
const myPromise3 = new Promise((resolve, reject) => {
    if (myStr.startsWith('p')) {
        setTimeout(x => resolve('three'), 3000);
    } else {
        setTimeout(x => reject('three error'), 3000);
    }
})

async function getMyPromises() {
    try {
        const responses = await Promise.allSettled([myPromise1, myPromise2, myPromise3]);
        console.log(responses);
    } catch (err) {
        console.log(err);
    }
}
getMyPromises();