import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import connectDb from './db.js'

const app = express()

const port = process.env.PORT

app.use(cors())

app.get('/', (req,res)=>{
    //res.send('Hello {from Server}')
    res.json('Hello {from Server}')
    connectDb()
})

app.listen(port, ()=> {
    console.log('listening on port: ' + port)
    connectDb()
})