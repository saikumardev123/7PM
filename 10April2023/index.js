
class Customer {
    customerId;
    name;
    address;
    accountNumber;
    accountBalance;
    constructor(customerId, name, address, accountNumber, accountBalance) {
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
}
var cust1 = new Customer(101, "kiran", "hyd", 1235455, 80000);
console.log(cust1);

// create 3 functions, 1 widthdraw, 2 deposit, 3 transfer