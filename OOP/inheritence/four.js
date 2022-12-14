class c{
    constructor(){
        console.log("Hello")
    }
}
class b extends c{
    constructor(){ 
        console.log("hi")                           //if we excute this code in console so you get an error 
    }
}
let a1=new b
console.log(a1)