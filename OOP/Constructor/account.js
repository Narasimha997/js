class Account{
    min_bal=5000;
    constructor(id,name,amount){
        this.acc_ID=id;
        this.acc_Name=name;
        this.acc_bal=amount;
    }
    deposit(amount){
        this.acc_bal=this.acc_bal+amount;
    }
}
let a1=new Account(001,"name",40000)
console.log(a1);
a1.deposit(30000)
console.log(a1)