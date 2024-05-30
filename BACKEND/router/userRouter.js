const express=require('express')
const router=express()
const userSchema=require('../schema/userSchema')
const validate=require('../validation/validate')
const jwt=require('jsonwebtoken')
const nodemailer=require('nodemailer')
router.post('/signup',async(req,res)=>{
try {

    await validate.validateAsync(req.body)
    const {fullname,email,password}=req.body
    const otpnum=Math.floor(10000+Math.random()*900000)
    const user=await userSchema.create({fullname,email,password,otpnum})
} catch (error) {
    
}
})

module.exports=router