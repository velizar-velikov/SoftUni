const arr = [1, 2, 3];

const myPromise = new Promise((resolve, reject) => {
    if (arr.length % 2 != 0) {
        resolve('this text lets you know that the promise resolved');
    } else {
        reject('this text lets you know that the promise is rejected');
    }
});

//async/await syntax
async function getMyPromise() {
    try {
        const response = await myPromise;
        console.log(response);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('the promise is settled');
    }
}

//.then syntax
function getMyPromise2() {
    myPromise.then(response => console.log(response))
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log('the promise is settled');
        })
}

getMyPromise();
getMyPromise2();