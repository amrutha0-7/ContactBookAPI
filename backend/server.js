console.log("VinaayakaGoVindhaVarahiSathemma");
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/userRoutes.js'
import mongoose from 'mongoose'
const app=express()
dotenv.config()
const port=process.env.PORT || 7711;

app.use(express.json())
app.use(cors())

app.use('/api',router)
app.use((req,res)=>{
    res.status(404).send("Error")
})
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`Server running om http://localhost:${port}`)
})