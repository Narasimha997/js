class Account{
    op(){                                               // Here we didn't write constructor()keyword in the parent class
        console.log("gm");
    }
}
class c extends Account{
   constructor(){  
    super()
   }
    op(){
        super.op()                                       // If we want print parent class member having same function name we have to use super.functionname()
        console.log("gn"); 
    }                                    // Then after using extends keyword in the child class we created constructor in the child class so we get an error 
                                     // Why because in parent class there will be default constructor inside it so we have to use super() keyword inside
                                                      // of the child class after decleration of constructor we have to specify it 
}
let a1=new c
a1.op()