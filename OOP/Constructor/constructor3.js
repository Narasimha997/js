class A{
    constructor(x,y){
  this.x=x;
  this.y=y;
    }
}
class B extends A{
    constructor(a,b,c){
        super(a,b)
        this.z=c;
    }
}
let b1=new B(1,2,3);
console.log(b1);