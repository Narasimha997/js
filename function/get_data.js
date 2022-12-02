function get_data(){
    console.log("one");
    console.log("two");
    return "three";       //return statement will terminates the execution whenever it reaches up to return statement //
    console.log("four");  // Here, this console.log("four") was given after the return statement
                             // So it will become unreachable.Simply,it's not going to be execute
}
let x=get_data();
console.log(x)