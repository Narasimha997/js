let a=require('./setinterval2')                                // After creation of exports method in one class methods to another class  
class b extends a{                                             // Now we have to import the another class method in these class so we have to use "require('./filename')"
    constructor(id,name,sal,companyname,loc){
        super(id,name,sal,companyname,loc)
        this.location=loc
    }
}
let s=new b(001,"name",50000,"Amazon","Banglore")
setInterval(() => {                                          //setInterval() this method repeats a block of code at every timing event
    console.log(s)                                           // This setInterval() method is to display 
}, 2000);