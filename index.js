const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const multer = require('multer')
const bodyParser = require('body-parser')
const morgan = require('morgan')

dotenv.config()
const app = express();
const router = express.Router();

app.use(morgan('dev'))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({limit:"30mb",extended:true}))
// app.use(bodyParser.urlencoded({limit: "30mb",extended:false}))
app.use(cors())
app.use(express.json())

const studentRoute = require('./src/student/routes')
app.use('/api/v1/students',studentRoute)

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"hello"
    })
})
const port  = 7000;
app.listen(port,()=>{
    console.log(`listening to post ${port}`);
})

