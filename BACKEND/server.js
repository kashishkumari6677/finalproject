const express=require('express')
const router=require('./router/userRouter')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/auth',router)
app.listen(5000,()=>{
    console.log('successful')
})