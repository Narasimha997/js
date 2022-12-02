function add(a,b,c=90){
    console.log(a+b+c)            //passing aruguments without assigning any value to the parmeter
}
add(56,78,90)
add(78,90,356)
console.log(add(78,56))

//parameters having a default value when having arguments had a value

function addi(a,b,c){
    return (a+b)!=c
}
console.log(addi(35,35,70))