//Callback()
let employees=[{id:001,name:"player1",sal:57000},
{id:001,name:"player1",sal:47000},{id:001,name:"player1",sal:67000}]

let create=(emp,callback)=>{
    setTimeout(()=>{                                //insert data into data source in array
        employees.push(emp)
        callback()
    },4000)
}
let get_Data=()=>{
    console.log("Test1")
    var rows=""
    setTimeout(()=>{
        employees.forEach((employee)=>{                           //Display into html table
            rows=rows+`<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                            </tr>`
        })
        document.getElementById("time").innerHTML=rows
    },1000)
    console.log("Test2")         
}
create({id:001,name:"player1",sal:57000},get_Data)