let a=[10,30,60.7,79.76,"BLACK OPS",]   //Creating an array
console.log(a)                           //accessing an array
console.log(a[4])                        //Accessing the last item
for(let i=0;i<=5;i++){                   //Accessing all items from array using For Loop
    console.log(a[i])
}
let b=[{id:001,name:"Ghost",email:"ghostcod07@gmail.com"}]
console.log(b)                            //Accessing Array of Objects items




// program to create a two dimensional array

function array(a, b) {                                 //passing parameter
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

let x = 2;
let y = 3;

var result = array(x, y);            //paasing arguments (invoke)
console.log(result)                 //print 2d array



//Simple Program to sum of 2D array
let o= [[1, 2], [9, 4]];
let p = [[2, 3], [4, 5]];
let k = [[], []];
for (let i = 0; i < o.length; i++) {
for (let j = 0; j < o[i].length; j++) {
k[i][j] = o[i][j] + p[i][j];
 }
}
console.log(k)

