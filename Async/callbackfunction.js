let list=[{id:001,name:"name",sal:45000},
{id:001,name:"name",sal:45000}]
let create=(emp)=>{
 setTimeout(() => {
    list.push(emp)
    console.log(list)
 }, 4000);
}
let get_employee=()=>{
    setTimeout(() => {
         let rows=""
         for(employee of list){
            rows=rows+`<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.sal}</td>
            </tr>`
         }
         document.getElementById('def').innerHTML=rows
    }, 4000);
}
create({id:003,name:"name",sal:78000});
get_employee;
