class b{
    warzone(){
        console.log("b");

    }

}
class a extends b{
        warzone(){
               console.log("a");
        }
        cod(){
            console.log("c");
        }
}
let a1=new a()
a1.warzone()