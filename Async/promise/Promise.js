/* let a=1
let b=3
let c=a+b
let d=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(c==4){
            resolve('success')

        }
        else{
            reject('fail')
        }
    },3000)
})
d.then((msg)=>{
    console.log("Successful");
}).catch((msg)=>{
    console.log("Failure");
}) */
let a=10
let c=46
let f=a+c;

let d=new Promise((yes,no)=>{
     setTimeout(()=>{
        if(f<=70){
            yes('success')
        }
    else{
        no('fail')
    }
     },3000)
})
d.then((den)=>{
    let rows=""
    rows+=`yes it is suucess`+den;
    document.body.innerHTML=rows;
    console.log(rows)
}).catch((fry)=>{
  let news=''
  news+=`no no it is not`+fry;
   document.body.innerHTML=news;
   console.log(rows)
})