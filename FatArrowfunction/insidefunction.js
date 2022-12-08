function outer(){
    let a=10;
    let b=20;
    console.log(a+b);
    function inner(){
        console.log("Choices Have Consequences")
    }
    inner();
}
outer();