let employees=[{id:001,name:"Player1",sal:47000},{id:001,name:"Player2",sal:57000}]
console.log("TEST1")
let create=(emp)=>{
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let flag=true
            if(flag){
             resolve("Data Inserted")
             employees.push(emp)
            }
            else{
             reject("NOT INSERTED")
            }
          },4000)
    })
}
let get_data=()=>{
    console.log("TEST2")
    let rows=""
    setTimeout(()=>{
        employees.forEach((employee)=>{
            rows=rows+`<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.sal}</td>
                       </tr>`
        })
        document.getElementById('time').innerHTML=rows
    console.log("TEST3")
    },1000)
    
}
create({id:003,name:"Player3",sal:67000})
.then((msg)=>{
       console.log(msg)
       get_data();
})
.catch((err)=>{
    console.log(err)
})