let a=0
let b=371;
let c=0;
let d=0
c=b;
while(c>0){
    a=c%10;
    c=parseInt(c/10);
    d=d+(a*a*a)

}
if(b==d){
    console.log("Its An Armstrong");

}
else{
    console.log("Its Not An Armstrong");
}