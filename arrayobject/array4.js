let a=[10,20,30,40]
console.log(a)
a.push("string")                    //It is used to insert new value 
a.push(70)
let new_length=a.length
console.log(a)
console.log(new_length)
a.shift()
console.log(a)
a.unshift(10)
console.log(a)
a.pop()
console.log(a)
console.log(a.reverse())
let index=a.indexOf("string")
console.log(index)
a.slice(0,3)
console.log(a)  
a.splice(1,3,4)
console.log(a)
                       //Then after using "splice()" function the remaining values will be print