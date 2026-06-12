function reverseString(str) {
    //1-> abcd
    // a,b,c,d
    //left right will be ther

    //0(n)
    // let res = ""

    // for (let i = str.length - 1; i >= 0; i--) {
    //     res +=str[i]
    // }

    // return res

    // other format i will approah that is 
    //hellow world -> world hellow


    // word by one then " " make it in word  same process 
    // hellow , world i ahve to reverse it 
    let word = ""
    let words = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            words.push(word)
            word = ""
        } else {
            word += str[i]
        }

    }
    words[words.length] = word

    let res = ""
    for (let i = words.length - 1; i >= 0; i--) {
        res += words[i]
        if (i > 0) {
            res += " "
        }
    }

    return res
}

// console.log(reverseString("hellow world"))

function isPalindrom(str) {
    let temp = str
    return str.split("").reverse().join('') === str
}

// console.log(isPalindrom("MaaMe"))


function twoSum(arr, target) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];

        if (map.has(target - ele)) {
            return [map.get(target - ele), i];
        }

        map.set(ele, i);
    }
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

function mostFrequentElement(arr) {
    const map = new Map()
    let maxEle = -Infinity
    let num;
    for (let i = 0; i < arr.length; i++) {
        // all element will store in map with ++ add one if prevous exiest ok 
        let ele = arr[i]
        map.set(ele, (map.get(ele) || 0) + 1)
        if (map.get(ele) > maxEle) {
            maxEle = map.get(ele)
            num = ele
        }
    }
    return { num, maxEle }
}


// console.log(mostFrequentElement([1, 2, 3, 4, 4, 3, 2, 3, 3]))

function removeDublicate(arr) {
    return [...new Set(arr)]
}

// console.log(removeDublicate([1, 2, 2, 3, 2, 4]))
// const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.filter(ele => ele % 2 == 0))
const users = [
    { name: "Ritam", age: 21 },
    { name: "John", age: 25 },
    { name: "rockey", age: 25 },
];

// console.log(users.map(({ name, age }) => name))
// const arr = [1, 2, 3, 4, 5];

// console.log(arr.reduce((acc, ele) => {
//     return acc + ele
// }))

// console.log(users.find(({ age }) => age > 21))
const arr = ["a", "b", "a", "c", "a"];


const res = arr.reduce((acc, ele) => {
    //if you are in acc then +1 other wise only one 
    acc[ele] = (acc[ele] || 0) + 1
    return acc
}, {})

// console.log(res)

// console.log(users.reduce((acc, { name, age }) => {
//     if (age >= 18) acc = { [name]: age }
//     return acc
// }, {}))
// console.log(users.find(({ age }) => age >= 18))
const names = ["ritam", "john"];

// console.log(names.map(ele=>ele.toUpperCase()))
const lar = [5, 10, 2, 20, 7];

// console.log(lar.reduce((acc, ele) => {
//     acc = acc < ele ? ele : acc
//     return acc
// }, lar[0]))
const users2 = [
    { name: "A", age: 25 },
    { name: "B", age: 18 },
    { name: "C", age: 30 }
];

// console.log(users2.sort((a, b) => b.age-a.age))
const users3 = [
    { name: "A", age: 15 },
    { name: "B", age: 20 },
    { name: "C", age: 25 }
];


console.log(users3.reduce(
    (acc,{name,age})=>{
        if(age>=18){
            acc.push(name)
        }
        return acc
    },[]
))
