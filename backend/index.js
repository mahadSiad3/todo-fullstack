import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import connectDb from './db.js'

import Todo from './modules/todo.js'

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/todos', async(req,res)=>{
    //res.send('Hello {from Server}')

    try {
        const todos = await Todo.find({})

   // res.json('Hello {from Server}')
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json(error)
    }
})

app.post('/todos', async(req,res)=>{
    // const todo = new Todo(req.body) //creates it to memory on the server
    // await todo.save() //actually saves it

    try {
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

app.listen(port, ()=> {
    console.log('listening on port: ' + port)
    connectDb()
})