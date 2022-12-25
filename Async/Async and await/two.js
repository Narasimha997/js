let employees=[{id:001,name:"Player1",sal:47000},{id:002,name:"Player2",sal:57000}]
console.log("test1")
let create=(emp)=>{
    return new Promise((enter,noentry)=>{
        setTimeout(()=>{
            let free=true
            if(free){
                enter("Your Approved")
                employees.push(emp)
            }
            else{
                noentry("NO ENTRY")
            }
        },4000)
    })
}
let get_data=()=>{
    console.log("test2")
    var rows=""
    setTimeout(()=>{
        employees.forEach((employee)=>{
            rows=rows+`<tr>
                     <td>${employee.id}</td>
                     <td>${employee.name}</td>
                     <td>${employee.sal}</td>
                  </tr>`
        });
        document.getElementById('time').innerHTML=rows
    },1000)
    console.log("test3")
}
create({id:003,name:"player3",sal:67000})
.then(()=>{})
.catch(()=>{})
get_data()