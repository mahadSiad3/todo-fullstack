import express from 'express'
import cors from 'cors'

const app = express()

const port = 3000

app.use(cors())

app.get('/', (req,res)=>{
    //res.send('Hello {from Server}')
    res.json('Hello {from Server}')
})

app.listen(port, ()=> console.log('listening on port: ' + port))