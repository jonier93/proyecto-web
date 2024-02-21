import ex from 'express'
import path from 'path'
import insert_record from './db.js'

const app = ex()
app.use(ex.static("frontend/build"))
app.use(ex.json())
app.use(ex.urlencoded({}))

const local_path = path.resolve()

app.listen('5000', function(req, res){
    console.log("Server has started")
})

app.get('/home', function(req, res){
    res.sendFile(local_path+"/frontend/build/index.html")
})

app.get('/register_page', (req, res)=>{
    res.sendFile(local_path+"/frontend/build/index.html")
})

app.post('/register_user', (req, res)=> {    
    let {name, lastname, id, birthday} = req.body
    console.log(name)
    insert_record(id, name, lastname, birthday)
    res.send("<h1> The user has been registered")
})     