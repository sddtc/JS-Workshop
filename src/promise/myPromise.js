const myPromise = new Promise((resolve, reject) => {
    if(Math.random() * 100 <= 90) {
        console.log('resolving the promise...');
        resolve({result: 'Hello, Promises!'});
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

const onResolved = (resolveValue) => console.log(resolveValue);
const onReject = (error) => console.log(error);

myPromise.then(onResolved, onReject);

// Same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});

// Output (in 90% of the cases)

// resolving the promise ...
// Hello, Promises!
// Hello, Promises!


