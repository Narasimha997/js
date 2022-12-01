/*var i = 0;
var j = 1
var k;
while(i<17)
{
    console.log(i);

    k = i+j;
    i = j;
    j = k;
}*/
var a=0;
var b=1;
var result=b;
for(var i=0;i<=10;i++){
    console.log(result);
    result=a+b;
    a=b;
    b=result;
}