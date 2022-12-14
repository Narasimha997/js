/* class Account{
    acc_ID;
    acc_Name;
    acc_Bal;
    constructor(id,name,amt){
        this.acc_ID=id;
        this.acc_Name=name;
        this.acc_Bal=amt;
    }

 }
 let a1=new Account(001,"r",9000)
 console.log(a1)
 */
 class person{
    firstName;
    lastName;
    age;
    eyeColor;
    constructor(first,last,level,color){
        this.firstName=first;
        this.lastName=last;
        this.age=level;
        this.eyeColor=color;
    }
}
let a1=new person("n","k",23,"black")
console.log(a1)
let a2=new person("o","p",21,"brown")
console.log(a2)