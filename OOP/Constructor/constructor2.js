// INHERITANCE 
class account{
    constructor(id,name) {
        this.id=id;
        this.name=name;
        
    }
}
class new_customer extends account{                     //"extends" keyword access the parent class properties & methods to the child class
    constructor(id,name,amount){
        super(id,name)
        this.amount=amount;
    }

}
let a=new new_customer(001,"name",1000)