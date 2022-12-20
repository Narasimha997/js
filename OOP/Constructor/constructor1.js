class account1{
    min_BAL=1000;
    constructor(id1,name1,amount1){
      this.acc_id=id1;
      this.acc_name=name1;
    this.acc_bal=amount1;
    }
    deposit(amount1){
        this.acc_bal=this.acc_bal+amount1
    }
    get_Bal() {
        return this.acc_bal - this.min_Bal
    }
    withdraw_Bal(amt){
        this.withdraw_Bal=this.acc_bal-amt
    }
}
let a=new account1(01,"Name",1001)
a.deposit(34)
console.log(a);
a.withdraw_Bal(1000)
console.log(a)
