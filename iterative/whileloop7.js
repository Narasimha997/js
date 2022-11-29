let a=12345
let rev = 0
let rem = 0
while(a >= 0){
    rem = a%10
    rev = (rev*10)+rem
    a=a/10
    console.log(rev)
}