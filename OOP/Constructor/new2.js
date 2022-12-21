const student=require('./new')
class details extends student{
    constructor(id,name,standard,fees,loc,msg,nation){
        super(id,name,standard,fees,loc)               // Even we don't declare new parameters inside of the super()keyword 
       this.loc=loc;                                   // We must have to declare the parameter inside of the constructor which acts like child class
       this.msg=msg;
       this.nation=nation
    }
}
let r1=new details(001,"Name",10,20000,"kadapa","kl","India")
console.log(r1);