class account{
    constructor(id,name) {
        this.id=id;
        this.name=name;
        
    }
}
class new_customer extends account{
    constructor(id,name,amount){
        super(id,name)
        this.amount=amount;
    }

}
let a=new new_customer(001,"name",1000)