let sum=(a,b)=>{
    console.log("This is sum")
    return a+b;
}
let multi=(a,b)=>{
    console.log("This is Multiplication")
    return a*b;
}
let plus=(a,b,cap)=>{
    return cap(a,b);
}
let r1=plus(10,20,sum)
console.log(r1)
let r2=plus(10,457,multi)
console.log(r2)