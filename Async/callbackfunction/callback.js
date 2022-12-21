let sum=((a,b)=>{
    return a+b;
})
let multi=((a,b)=>{
    return a*b;
})
let r21=(a,b,call)=>{
    return call(a,b)
}
let r=r21(100,12,sum)
console.log(r);
let b=r21(10,466,multi)
console.log(b);