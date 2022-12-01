let emp=[1,2,3,4,5,6]
for(let i=0;i<=5;i++){
    console.log(emp[i]);
}
for(empj of emp){
    console.log(empj);
}
for(let a=0;a<=emp.length-1;a++){
    console.log(emp[a]);                 /*If we dont know the index number in the array like how many values/elements in the array so we have to use 
                                                arrayname(arrayname.length-1)*/
}