import mysql from 'mysql'

let conexion = mysql.createConnection({
    host: "db-696.cleuykyogshj.us-east-2.rds.amazonaws.com",
    database: "db_696",
    user: "admin",
    password: "12345678"
})

conexion.connect(function(err){
    if(err){
        console.log(err)
    }
    else {
        console.log("succesful connection")
    }
})

export default function insert_record(id, name, lastname, birthday){
    conexion.query("INSERT INTO users VALUES (" + id + ", '" + name + "', '" + lastname + "', '" + birthday  + "')", function(err, result) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("succesful registration")
        }
    })
}