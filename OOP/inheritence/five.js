class a{
    constructor(){
        console.log("hello")
    }
}
class b extends a{
    constructor(){
        super()
        console.log("hi")
    }
}
let b1=new b
console.log(b1)