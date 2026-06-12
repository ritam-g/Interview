const promise = new Promise((res, rej) => {
    let a = 1 + 1
    if (a == 2) {
        console.log('====================================');
        console.log('this is resolve format');
        console.log('====================================');
        res('success')
    } else {
        rej('failed')
    }
})


// promise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

async function call(params) {
    const result = await promise
    console.log(result);
}
// call()

