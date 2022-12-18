class a{
    constructor(){
        console.log("hello")
    }
}
class b extends a{
    constructor(){
        super()                                  // uUsing super() keyword we can access the parent members when we are using constructor in both classes  
        console.log("hi")
    }
}
new b