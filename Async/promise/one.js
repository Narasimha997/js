let a=new Promise((resolve,reject)=>{
    setInterval(()=>{
        let a=1
        let b=3
        let c=a+b
        if(c==4){
       resolve('success')
        }
        else{
            reject('fail')
        }
    },1000)
})
a.then((msg)=>{
    console.log("Yes it is "+msg);
})
a.catch((msg)=>{
    console.log("fail"+msg);
})