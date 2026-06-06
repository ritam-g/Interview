let arr = []
for (let i = 0; i < 20; i++) {
    arr.push(function () { console.log(i) })
}

arr[0]()
arr[1]()
arr[2]()
arr[3]()
console.log(arr[4])