const express = require("express")
const app = express()
const {customErr} = require('./middleware/customErr') 
const {notFound} = require('./middleware/notFound') 
const db = require('./DB/connect')
const {asyncWrapper} = require('./middleware/asyncWrapper')
const routes = require('./routes/routes.js')

require('dotenv').config();

port  = process.env.PORT || 3015

//middleware
app.use(routes)
app.use('/', (req, res)=>{res.sendFile(__dirname + '/view/index.html', err=>{if(err){return res.status(404).send({message:"Unable to load Home Page"})}})})
app.use(express.json())
app.use(customErr)
app.use(notFound)

//server
asyncWrapper( async()=>{
        await db.connectionDB(process.env.MONGO_URL)
        app.set('port', port)
        app.listen(app.get('port'))
        console.log(`Server Listening at ${port}`)
    }
) 










