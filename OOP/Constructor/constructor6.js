class A{
    m1(){
        console.log("Message");
    }
}
class B extends A{
    constructor(a,b){
        super()
    }
    m1(){
        console.log("B:m1()")
        super.m1()       
    }
    m2(){
        console.log("Message2");
    }
}
let a1=new B(1,2)
a1.m1()
a1.m2()