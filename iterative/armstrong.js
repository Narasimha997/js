/*let a=0//rem
let b=371;//num
let c=0;//sum
let d=0//temp
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
}*/
let num=154
let sum=0
let rem=0
let temp=0 
temp=num
while(temp>0){
    rem=temp%10
    temp=parseInt(temp/10)
    sum=sum+(rem*rem*rem)
}
if(sum==num){
    console.log("armstrong");
}
else{
    console.log("not an armstrong");
}