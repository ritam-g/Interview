// the arry in const

const arr = [1, 2, 3, 4, 5];
// ! this means you are creating new memory for the array that const dont allow
// arr = [1, 2, 3, 4, 5, 6];
// you are oppeing that arry and adding 6
arr.push(6);

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


Arr.forEach((ele)=>{
console.log(ele*10);
})

// console.log(arr2);

// console.log(arr2);