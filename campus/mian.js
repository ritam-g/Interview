class ATM {

    #CompanyBalance = 12;
    owner = "ritam";

    getCompayOwner() {
        return this.owner
    }
    getMethode() {
        return this.#CompanyBalance
    }
}

class Bank extends ATM {
    constructor(name) {
        super()
        this.name = name
    }

    call() {
        console.log("hey i am call funciton ")
    }
}


const bank = new Bank("Ritam")
console.log(bank.getCompayOwner())
console.log(bank.getMethode())
bank.call()


// polly morphism

class Polymorphisam {
    call() {
        console.log("i am call")
    }
    call(q) {
        console.log(q)
    }
}

const polymorphisam = new Polymorphisam()
polymorphisam.call("hello")
polymorphisam.call()