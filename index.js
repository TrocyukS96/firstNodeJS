//imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const uuid = require('uuid');
console.log(`Here is a test v1 uuid: ${uuid.v1()}`);
//create express app
const app = express()
const port = 80
const jsonParser = bodyParser.json()

//database
const users =[
    {id:"1", name:"Ivan", banned:false, level:23},
    {id:"2", name:"Dima", banned:true, level:25},
    {id:"3", name:"Jenya", banned:false, level:21},
    {id:"4", name:"Sasha", banned:true, level:19},
    {id:"5", name:"Petya", banned:false, level:22},
]
const getUsers = () =>{
    return new Promise((res, rej)=>{
        res(users)
    })
}
const addUser = (user)=>{
    // return new Promise((res, rej)=>{
    //     res(users.push({name:user, id: uuidV1, banned: false, level: 3456}))
    // })
   return users.push({name:user, id: "3456", banned: false, level: 3456})
}

app.use(cors())

//configure the app
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', async (req, res) => {
    let users = await getUsers();
    res.send(users)
})

app.get('/tasks', async (req, res) => {
    res.send("tasks")
})

app.post('/users',  (req, res) => {
    debugger
   addUser('some Name')
    res.send({"success":true})
})
//add middleware
app.use((req,res)=>{
    res.send(404)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})