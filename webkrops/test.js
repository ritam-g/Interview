// the arry in const

const arr100 = [1, 2, 3, 4, 5];
// ! this means you are creating new memory for the array that const dont allow
// arr = [1, 2, 3, 4, 5, 6];
// you are oppeing that arry and adding 6
arr100.push(6);

// console.log(arr);

// clouser
function parent(U) {
    let roll = 0
    let money = 200
    let name = ["ritam", "maty"]
    let init = U
    return function () {
        roll++
        console.log(roll);
        if (name.includes(init)) {
            console.log(money);
        }
    }


}

// const child = parent("rock")
// child()
// child()
// child()


function call(cb) {
    console.log("i am call")
    cb()
}


// call(() => {
//     console.log("i am callback")
// })

const promise = new Promise((res, resj) => {
    let num = Math.random() * 100
    if (num < 50) {
        res("success")
    } else {
        resj("failed")
    }

})


// promise
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.error(err);
// })

async function getData() {
    try {
        const data = await promise
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}

// getData()

let Arr = [1, 2, 3, 4, 5]

// let arr2=Arr.map((e,i)=>{
//     return e*i
// })

// let arr2=Arr.filter((ele)=>{
//     return ele%2==0
// })


// const arr2 = Arr.reduce((acc, curr) => {
//     if (curr % 2 === 0) {
//         acc[curr] = "even";
//     } else {
//         acc[curr] = "odd";
//     }

//     return acc;
// }, {});


// Arr.forEach((ele)=>{
// console.log(ele*10);
// })

// console.log(arr2);

// console.log(arr2);


// let arr2=[6,7,8,9,10]
// let arr3=[...arr2,...arr]
// arr3.push(3434)

// console.log(arr2)
// console.log(arr3)

// const arr = {
//     name: "ritam",
//     age: 22,
//     address: {
//         city: "kolkata",
//         state: "west bengal"
//     }
// }

// const cObj = JSON.parse(JSON.stringify(arr))
// cObj.address.city = "delhi"
// console.log(cObj);
// console.log(arr);'''


// let arr = [10, 20, [23, [34, [34]]]]

// arr = arr.flat(Infinity)


// function reset(...args){
//     console.log(args)
// }


// reset(1,2,3,4)


// const obj={
//     name:"ritam",
//     age:22
// }

// const {name,age}=obj

// console.log(name,age)

// let arr=[1,2,3,4,5]


// const [f,s,t,...rest]=arr

// console.log(f,s,t);
// console.log(rest);


// localStorage.setItem("name","ritam")

// console.log(localStorage.getItem("name"))

// const obj={
//     name:"ritam",
//     age:22

// }

// localStorage.setItem("obj",JSON.stringify(obj))

// console.log(JSON.parse(localStorage.getItem("obj")))


const p = new Promise((res, rej) => res("hey i am resolve"))

// p.then((msg) => console.log(msg))

// async function call() {
//     return "hellow"
// }

// (async function getData() {
//     let data = await call()
//     console.log(data);
// })()


const user = {
    name: "ritam",
    age: 22,
    call: function () {
        console.log(this.name)
    },
    call2: () => {
        console.log(this.name)
    },
    call3: function () {
        (() => {
            console.log(this);
        })()
    }
}


// user.call()
// user.call2()
// user.call3()

// function execute(){
//     console.log('   this is execute');
// }

// execute.prototype.callMe=()=>console.log('this is call me')


// const obj=new execute()

// obj.callMe()

function isPalindrom(string) {
    if (typeof string === "string") {
        let temp = string
        return temp === string.split("").reverse().join("")
    } else {
        let temp = string
        let reverse = 0
        while (string > 0) {
            let last = string % 10
            reverse = (reverse * 10) + last

            string = Math.floor(string / 10)
        }
        return reverse === temp
    }
}

// console.log(isPalindrom(121))

function sortArray(arr) {
    // ate the end will be 1 [0,0,,1,1,1] ,[0,1,0]

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] == 0) left++
        else if (arr[right] == 1) right--
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }

    return arr
}

// console.log(sortArray([1,0,1,0,1]))

// max consucutev

function maxConsecutive(arr) {
    let num = null
    let count = 0
    let max = 0

    for (let n of arr) {
        if (count == 0) num = n
        if (num == n) count++
        else {
            num == null
            count = 0
        }
        max = Math.max(max, count)
    }
    return max
}

// console.log(maxConsecutive([1,1,0,1,1,1]));


function sum(str) {
    let store = "";
    let total = 0;

    for (let n of str) {

        if (n >= "0" && n <= "9") {
            store += n;
        } else {
            total += Number(store);
            store = "";
        }

    }

    total += Number(store || 0);

    return total;
}

// console.log(sum("aass1fg23jk1"));

function reverseString(str) {
    let words = []
    let word = ""

    for (let ch of str) {
        if (ch == " ") {
            words[words.length]=word
            word = ""
        } else {
            word += ch
        }
    }

    words[words.length]=word

    let result=""
    for(let i=words.length-1;i>=0;i--){
        result+=words[i]
        result+=" "
    }
    return result
}

console.log(reverseString("hello world"));