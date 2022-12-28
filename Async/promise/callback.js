// callback function is a function passed into another function
// It come into action after the completion of first function action
let a=[{title:"postone",body:"this first"},{title:"postone",body:"this first"}]
function create(){
    setTimeout(()=>{
        let output="";
        a.forEach((post)=>{
     output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output
    },1000)
}
function post1(post,get){                                       //callback() function here,'get' is the callback funtion
    setTimeout(()=>{
        a.push(post);
           get();
    },2000)
}
post1({title:"posttwo",body:"this is two"},create)
