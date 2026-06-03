// console.log(a)

// var a = 10


promise = new Promise((res, rej) => {
    if (true) {
        res("accepted")
    } else {
        rej("rejected")
    }
})
// promise.then((msg) => console.log(msg))
//     .catch((msg) => console.log(msg))

async function call() {
    try {
        const data = await promise
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// call()
// const names = ["ritam", "john", "alex"];

// const arr = names.map(ele => ele.toUpperCase())
// console.log(arr)

// const arr = [1, 2, 3];

// console.log(arr.map((ele,i)=>ele+i))

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.filter(ele => ele % 2 == 0))

// const users = [
//     { name: "Ritam", age: 20 },
//     { name: "John", age: 16 },
//     { name: "Alex", age: 25 }
// ];

// console.log(users.filter(({ age }) => age >= 18))
// const arr = [0, 1, 2, "", false, "hello"];

// console.log(arr.filter(ele => {
//     if (ele) {
//         return ele
//     }
// }))

// console.log(arr.filter(Boolean))

// const arr = [1, 2, 3, 4];

// console.log(arr.reduce((acc, ele) => acc + ele, 0))

// const arr = [5, 2, 9, 1, 7];

// console.log(arr.reduce((acc, ele) => acc < ele ? ele : acc, 0))
const fruits = ["apple", "banana", "apple"];

console.log(fruits.reduce((acc, frut) => {
     acc[frut]= (acc[frut] || 0)+1

     return acc

},{}))