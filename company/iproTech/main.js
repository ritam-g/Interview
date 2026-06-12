// const promise = new Promise((res, rej) => {
//     if (true) return setTimeout(() => { res("hell i am response") }, 1000)
//     else setTimeout(() => rej("some thing went wrong"), 2000)
// })

// promise
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err))



// console.log("hello")


// setTimeout(() => {
//     console.log("hello i am asyncronous operation");
// }, 1000);


function first(f2) {
    console.log("i am first")
    f2((f4) => {
        console.log("i am f3")
        f4()
    })
}

first((f3) => {
    console.log("i am f2")
    f3(() => {
        console.log("i am f4")
    })
})
