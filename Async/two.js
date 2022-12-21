let sum=(a,b)=>{
    return ( a+b);
}
let multi=(a,b)=>{
    return a*b;
}
let cal=(a,b,callback)=>{
    return callback(a,b)
}
let r=cal(100,20,(a,b)=>{return a-b})
console.log(r)
let r1=cal(100,20,sum)
console.log(r1)
let r2=cal(100,20,multi)
console.log(r2)
