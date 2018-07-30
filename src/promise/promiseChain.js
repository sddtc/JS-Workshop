const promiseChain = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

promiseChain(2000).then(() => {
    console.log('Resolved after 2 seconds');

    return promiseChain(1500);
}).then(() => {
    console.log('Resolved after 1.5 seconds');

    return promiseChain(3000);
}).then(() => {
    console.log('Resolved after 3 seconds');

    throw new Error();
}).catch(() => {
    console.log('Caught an error.');
}).then(() => {
    console.log('Done.');
});

// Resolved after 2 seconds
// Resolved after 1.5 seconds
// Resolved after 3 seconds
// Caught an error.
// Done.


