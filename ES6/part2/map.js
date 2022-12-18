// //map()----It going to Iterate the Array and excutes the gievn Function
// let a=["q","r","t","o",1,2,3,4]
// let b=a.map((b)=>{
//     console.log(b)
// })
// let c=[1,2,3,4,5,6,7,8,9,0]
// let map1=c.map(c=>c*2)
// console.log(map1)
// class math1{
//     map1=[1,2,3,4,5,6,7];
//     map2=(map1=>{
//         map1*2
//         console.log(map2);
//     });    
// }
// let a=new math1
// console.log(a);
let a=[10,2,4,3,5,7960,4,3,6,76,89,5678]
let b=a.filter(a=>a%2==0)
console.log(b);
//toUpperCase;
let names=["h","z","k"]
let change=[...names,"S" ]
let v=[]
for(name of change){
v.push(name.toUpperCase())
}
console.log(v);