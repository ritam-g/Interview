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
// const fruits = ["apple", "banana", "apple"];

// console.log(fruits.reduce((acc, frut) => {
//      acc[frut]= (acc[frut] || 0)+1

//      return acc

// },{}))


// const arr = ["a", "b", "a", "c", "b", "a"];

// console.log(arr.reduce((acc, key) => {
//     acc[key] = (acc[key] || 0) + 1
//     return acc
// }, {}))

// const users = [
//     { name: "Ritam", age: 20 },
//     { name: "John", age: 20 },
//     { name: "Alex", age: 25 }
// ];

// console.log(users.reduce((acc, { name, age }) => {
//     if (acc[age]) {
//         acc[age] = [...acc[age], { age, name }]
//     }
//     else {
//         acc[age] = [{ age, name }]
//     }
//     return acc
// }, {}))

// {
//     age[{}{}]

// }

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 30000 }
];
// {
//   name: "Laptop",
//   price: 50000
// }

// console.log(products.reduce((acc, { name, price }) => {
//     if (acc < price) {
//         acc = { name, rpice }
//     }
//     return acc
// }, products[0]))

const arr = [1, 2, 3, 4];

// console.log(arr.reduce((acc, ele) => {
//     acc.push(ele*2)
//     return acc
// },[]))
// {
//   mobile: ["iPhone", "Samsung"],
//   laptop: ["MacBook"]
// }


// console.log([
//     { category: "mobile", name: "iPhone" },
//     { category: "laptop", name: "MacBook" },
//     { category: "mobile", name: "Samsung" }
// ].reduce((acc, { category, name }) => {
//     if (acc[category]) {
//         acc[category] = [...acc[category], name]
//     }
//     else {
//         acc[category]=[name]
//     }
//     return acc
// }, {}))

// // console.log(arr.splice(0,2))
// console.log(arr.includes(1))

// console.log(typeof "")

// 8. for...in vs for...of

// const obj={
//     name:"ritam",
//     age:22
// }

// for(let key in obj){
//     console.log(key)
//     console.log(obj[key])
// }



// for (let n of arr) {
//     console.log(n)
// }

// function one() {
//     console.log("i am one ")
// }

// one.prototype.callMe=(msg)=>{console.log(msg)}

// const obj=new one()

// obj.callMe("i am two")

// ! own reduce

function ownReducer(arr, cb, initialValue) {
    let ans = initialValue
    for (let n of arr) {
        ans = cb(ans, n)
    }
    return ans
}

// console.log(ownReducer([1, 2], (acc, ele) => acc - ele, 0))
const users = [
    { name: "Ritam", city: "Kolkata" },
    { name: "Rahul", city: "Delhi" },
    { name: "Amit", city: "Kolkata" }
];
// {
//   Kolkata: [
//     { name: "Ritam", city: "Kolkata" },
//     { name: "Amit", city: "Kolkata" }
//   ],
//   Delhi: [
//     { name: "Rahul", city: "Delhi" }
//   ]
// }

// console.log(users.reduce((acc, { name, city }) => {
//     if (acc[city]) {
//         acc[city] = [...acc[city], { name, city }]
//     }
//     else {
//         acc[city] = [{ name, city }]
//     }
//     return acc
// }, {}))
// function groupBy(arr, key) {
//     const result = {}

//     for (let n of arr) {
//         let obj = n
//         let value = n[key]
//         if (result[value]) {
//             result[value] = [...result[value], obj]
//         }
//         else {
//             result[value] = [obj]
//         }
//     }
//     return result
// }

// console.log(groupBy(users, "city"))
function faltArray(arr) {
    let result = []
    for (let n of arr) {
        if (Array.isArray(n)) {
            // console.log(result)
            result.push(...faltArray(n))
            // console.log(result)
        }
        else result.push(n)
    }
    return result
}
// console.log(faltArray([1, [2, [3, 4]], 5]))
function checkPrime(n) {
    if (n < 2) return false
    for (let i = 2; i < Math.floor(n / 2); i++) {
        if (n % 2 == 0) return false
    }
    return true
}

// console.log(checkPrime(100))
function printPrimeNumber(n) {
    //for every number will having range 2 to n 

    for (let ele = 2; ele < n; ele++) {
        let isPrime = true
        for (let itrate = 2; itrate < ele; itrate++) {

            if (ele % itrate == 0) isPrime = false; break
        }
        if (isPrime) console.log(ele)
    }
}

// console.log(printPrimeNumber(10))

let stack = []

stack.push(10)
stack.push(10)
stack.push(10)
stack.push(10)
stack.push(20)

stack.pop()

// console.log(stack)

let queue = []

queue.push(20)
queue.push(10)
queue.push(10)
queue.push(10)
queue.push(20)

queue.shift()
// queue.unshift(10000)
// console.log(queue)

// console.log(100/50/2)
class Car {
    #owner = "ritam"

    getOwner() {
        return this.#owner
    }
}

const car=new Car()
console.log(car.getOwner())

