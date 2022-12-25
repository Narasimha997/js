let employees=[{id:001,name:"player1",sal:57000},
{id:001,name:"player1",sal:47000},{id:001,name:"player1",sal:67000}]

let create=(emp)=>{
    setTimeout(()=>{                                //insert data into data source in array
        employees.push(emp)
    },4000)
}
let get_Data=()=>{
    setTimeout(()=>{},10000)         //Display into html table
}
create({id:001,name:"player1",sal:57000})
get_Data();