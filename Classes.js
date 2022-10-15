const incomes = [{
    income: 20000,
    incomeDescription: 'Software engineer'
}]
const expenses = [{
    expense: 12000,
    expenseDescription: 'Utility'
}]
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses, totalincome, totalexpense, addIncome, accountBalanceMethod) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
        this.totalincome = totalincome
        this.totalexpense = totalexpense
        this.addIncome = addIncome
        this.accountBalanceMethod = accountBalanceMethod

    }

}
let a = new PersonAccount('Daniyal', 'Ashraf', incomes, expenses, 50000, 35000, 15000, 132000);
console.log(a);

class Automobile {
    constructor(name,model,color,type) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type
    }
    start(){
        console.log(`${this.name} is ready to start `)
    }
    opendoor(){
        console.log('Doors are opening')
    }
}

class Truck extends Automobile {
    constructor (name,model,color,type,engine,make) {
        super(name,model,color,type)
        this.engine  = engine
        this.make = make
    }
}
class Bus extends Automobile {
    constructor (name,model,color,type,engine,make,seats) {
        super(name,model,color,type,seats)
        this.engine  = engine
        this.make = make
        this.seats = seats
    }
}
let b = new Truck('Truck','2019','Black','Manual','3000cc','toyota');
let c = new Bus('Bus','2009','Red','Automatic','2000cc','toyota','12')
console.log(b);
console.log(c);