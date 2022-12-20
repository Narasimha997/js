class Acc{
    constructor(id,name){
       this.id=id;
       this.name=name;
    }
}
class Bank extends Acc{
    constructor(id,name,amount,msg){
        super(id,name)
            this.amount=amount;
            this.msg=msg
        
    }
}
let a=new Bank(001,"kl",90000,"ko")
console.log(a);