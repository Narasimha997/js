class Account{
    min_bal=500;
    acc_bal=0;
    deposit_amt(amount){
        this.acc_bal=this.acc_bal+amount                //"this" is a keyword / pointer pointing to the current object inside of a class 
                                                       //"this" is to access the class members
    }
    get_bal(){
      return this.acc_bal-this.min_bal
    }
}
let a1=new Account();
let a2=new Account();
console.log(a1)
console.log(a2);
a1.deposit_amt(5000)
a2.deposit_amt(4700)
console.log(a1)
console.log(a2)
let r1=a1.get_bal()
console.log(r1)
let r2=a2.get_bal()
console.log(r2)